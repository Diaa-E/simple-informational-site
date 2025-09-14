import animateTypewriter from "./typewriteAnimation.js";

const titleElement = document.querySelector(".page-title>.visible-text");
const titleText = document.querySelector(".page-title>.hidden-text").textContent.trim();

animateTypewriter(titleText, titleElement, 100);

const listItems = document.querySelectorAll("li.entry-list-item");

for (let i = 0; i < listItems.length; i++)
{
    setTimeout(() => {

        listItems[i].classList.add("visible");
    }, 50 * i);
}