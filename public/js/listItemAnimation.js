export default function animateListItems(listItems)
{
    if (!listItems) return;

    for (let i = 0; i < listItems.length; i++)
    {
        setTimeout(() => {

            listItems[i].classList.add("visible");
        }, 50 * i);
    }
}