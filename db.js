const authors = [
    {
        id: "1",
        name: "Agatha Christy"
    },
    {
        id: "2",
        name: "J.K Rowling"
    },
    {
        id: "3",
        name: "Boris Strugatsky"
    },
    {
        id: "4",
        name: "Arkady Strugatsky"
    }
];

const books = [
    {
        id: "1",
        name: "Roadside Picnic"
    },
    {
        id: "2",
        name: "Death on the Nile"
    },
    {
        id: "3",
        name: "Hansel and Gretel"
    },
    {
        id: "4",
        name: "Harry Potter and the Goblet of Fire"
    },
    {
        id: "5",
        name: "V for Vendetta"
    }
];

async function getAuthorById(id)
{
    return authors.find((author) => author.id === id);
}

async function getBookById(id)
{
    return books.find((book) => book.id === id);
}

export {
    getAuthorById,
    getBookById
};