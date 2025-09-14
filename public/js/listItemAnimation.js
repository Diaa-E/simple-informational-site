export default function animateListItems(listItems, delay)
{
    if (!listItems) return;

    for (let i = 0; i < listItems.length; i++)
    {
        setTimeout(() => {

            listItems[i].classList.add("visible");
        }, delay * i);
    }
}