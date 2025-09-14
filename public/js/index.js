const titleElement = document.querySelector(".page-title>.visible-text");
const titleText = document.querySelector(".page-title>.hidden-text").textContent.trim();
const textArray = titleText.split("");

for (let i = 0; i < textArray.length; i++)
{
    setTimeout(() => {

        titleElement.textContent += textArray[i];
    }, 100 * i)
}