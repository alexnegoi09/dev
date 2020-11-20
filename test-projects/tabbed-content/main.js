const tab1 = document.querySelector(".container .tab1");
const tab2 = document.querySelector(".container .tab2");
const tab3 = document.querySelector(".container .tab3");
const tabContent = document.querySelectorAll("[data-content]");
const content1 = document.querySelector(".container .content1");
const content2 = document.querySelector(".container .content2");
const content3 = document.querySelector(".container .content3");

function showContent(content) { 
    for (let i = 0; i < tabContent.length; i++) { 
        tabContent[i].classList.remove("active");
    }
    content.classList.add("active");
}

tab1.addEventListener("click", function () { 
    showContent(content1);
});
tab2.addEventListener("click", function () { 
    showContent(content2);
});
tab3.addEventListener("click", function () { 
    showContent(content3);
});
