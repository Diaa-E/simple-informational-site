import animateTypewriter from "./typewriteAnimation.js";

const titleElement = document.querySelector(".error>.visible-text");
const titleText = document.querySelector(".error>.hidden-text").textContent.trim();

animateTypewriter(titleText, titleElement, 100);