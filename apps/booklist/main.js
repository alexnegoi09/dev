class Book {
  constructor(title, author, pages, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
  }
}

class BookList {
  constructor() {
    const allBooks = localStorage.getItem("books");
    this.books = allBooks ? JSON.parse(allBooks) : [];
    this.titleInput = document.querySelector("#main-form .title");
    this.authorInput = document.querySelector("#main-form .author");
    this.pagesInput = document.querySelector("#main-form .pages");
    this.isbnInput = document.querySelector("#main-form .isbn");
    this.submitBtn = document.querySelector("#main-form .submit");
    this.table = document.querySelector("#main-table tbody");
  }

  setEvents() {
    this.submitBtn.onclick = (e) => {
      e.preventDefault();
      let book = new Book(this.titleInput.value, this.authorInput.value, this.pagesInput.value, this.isbnInput.value);
      this.books.push(book);
      localStorage.setItem("books", JSON.stringify(this.books));

      this.displayBook();
    }
  }

  displayBook() {
    this.table.innerHTML += `<tr>
                              <td>${this.titleInput.value}</td>
                              <td>${this.authorInput.value}</td>
                              <td>${this.pagesInput.value}</td>
                              <td>${this.isbnInput.value}</td>
                              <td class="delete"><i class="fas fa-window-close"></i></td>
                            </tr>`;
    this.titleInput.value = "";
    this.authorInput.value = "";
    this.pagesInput.value = "";
    this.isbnInput.value = "";                      
    this.deleteFunc();
    }

    displayOnLoad() {
      if (localStorage.getItem("books")) {
        this.books.forEach((book) => {
          this.table.innerHTML += `<tr>
                                    <td>${book.title}</td>
                                    <td>${book.author}</td>
                                    <td>${book.pages}</td>
                                    <td>${book.isbn}</td>
                                    <td class="delete"><i class="fas fa-window-close"></i></td>
                                   </tr>`;
         })
       }

       this.deleteFunc();
     }

     deleteFunc() {
       let delBtn = document.querySelectorAll("#main-table tbody tr .delete");
       delBtn.forEach((btn, index) => btn.addEventListener("click", () => {
         this.books.splice(index, 1);
         const row = document.querySelector("#main-table tbody tr");
         index = row.rowIndex;
         console.log(index, row.rowIndex, this.books);
         btn.parentElement.remove();
         localStorage.setItem("books", JSON.stringify(this.books));
       }));

     }

}

let booklist = new BookList();
booklist.setEvents();
booklist.displayOnLoad();
