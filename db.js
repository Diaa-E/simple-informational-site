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

async function getAuthorById(id)
{
    return authors.find((author) => author.id === id);
}

export {
    getAuthorById
};