export default function animateTypewriter(text, targetElement, strokeDelay)
{
    const textArray = text.split("");

    for (let i = 0; i < textArray.length; i++)
    {
        setTimeout(() => {

            targetElement.textContent += textArray[i];
        }, strokeDelay * i);
    }
}