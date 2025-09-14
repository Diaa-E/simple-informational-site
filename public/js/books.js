import animateListItems from "./listItemAnimation.js";
import animateTypewriter from "./typewriteAnimation.js";

const titleElement = document.querySelector(".page-title>.visible-text");
const titleText = document.querySelector(".page-title>.hidden-text").textContent.trim();
const listItems = document.querySelectorAll("li.entry-list-item");

animateTypewriter(titleText, titleElement, 100);
animateListItems(listItems, 50);