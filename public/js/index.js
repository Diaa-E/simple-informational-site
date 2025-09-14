import animateTypewriter from "./typewriteAnimation.js";

const titleElement = document.querySelector(".page-title>.visible-text");
const titleText = document.querySelector(".page-title>.hidden-text").textContent.trim();

animateTypewriter(titleText, titleElement, 100);