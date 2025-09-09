import { v4 as generateId } from "uuid";

const authors = [
    {
        id: generateId(),
        name: "Agatha Christie",
        desc: `Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE was an
        English author known for her 66 detective novels and 14 short story collections,
        particularly those revolving around fictional detectives Hercule Poirot and Miss Marple.`
    },
    {
        id: generateId(),
        name: "J.K Rowling",
        desc: `Joanne Rowling, known by her pen name J. K. Rowling, is a British
        author and philanthropist. She is the author of Harry Potter, a seven-volume
        fantasy novel series published from 1997 to 2007.`
    },
    {
        id: generateId(),
        name: "Boris Strugatsky",
        desc: `Popular science-fiction writers, the Strugatsky brothers have used the
        genre since the 1960s to comment on contemporary society, at times
        provoking major controversy. It's Hard to Be a God (1964) is
        a dysutopia with commentary on historical theories.`
    },
    {
        id: generateId(),
        name: "Arkady Strugatsky",
        desc: `Popular science-fiction writers, the Strugatsky brothers have used the
        genre since the 1960s to comment on contemporary society, at times
        provoking major controversy. It's Hard to Be a God (1964) is
        a dysutopia with commentary on historical theories.`
    },
    {
        id: generateId(),
        name: "H.P Lovercraft",
        desc: `Howard Phillips Lovecraft was an American writer of weird,
        horror, fantasy, and science fiction. He is best known for his
        creation of the Cthulhu Mythos, but his legacy is also apparent in terms like
        "Lovecraftian horror" and an enduring fandom.`
    },
    {
        id: generateId(),
        name: "Stephen King",
        desc: `Stephen Edwin King is an American author. Dubbed the "King of Horror",
        he is widely known for his horror novels and has also explored other genres,
        among them suspense, crime, science-fiction, fantasy, and mystery.`
    },
    {
        id: generateId(),
        name: "Naguib Mahfouz",
        desc: `Naguib Mahfouz Abdelaziz Ibrahim Ahmed Al-Basha was an Egyptian writer who won the
        1988 Nobel Prize in Literature.`
    },
    {
        id: generateId(),
        name: "George Orwell",
        desc: `Eric Arthur Blair was an English novelist, poet, essayist, journalist, and
        critic who wrote under the pen name of George Orwell. His work is characterised by lucid prose,
        social criticism, opposition to all totalitarianism, and support of democratic socialism.`
    },
    {
        id: generateId(),
        name: "William Shakespeare",
        desc: `William Shakespeare was an English playwright, poet and actor. He is widely
         regarded as the greatest writer in the English language and the world's pre-eminent dramatist. 
         He is often called England's national poet and the "Bard of Avon" or simply "the Bard".`
    },
    {
        id: generateId(),
        name: "Charles Dickens",
        desc: `Charles John Huffam Dickens was an English novelist, journalist, 
        short story writer and social critic. He created some of literature's best-known 
        fictional characters, and is regarded by many as the greatest novelist of the Victorian era.`
    },
    {
        id: generateId(),
        name: "Franz Kafka",
        desc: `Franz Kafka was a German language Jewish Czech writer and novelist born in Prague,
        in the Austro-Hungarian Empire.`
    },
    {
        id: generateId(),
        name: "Alexandre Dumas",
        desc: `Alexandre Dumas, also known as Alexandre Dumas père, was a French novelist and playwright.
        His works have been translated into many languages and he is one of the most widely read French authors.`
    },
    {
        id: generateId(),
        name: "Albert Camus",
        desc: `Albert Camus was an Algerian-born French philosopher, novelist, author, dramatist,
        journalist, world federalist, and political activist. He was the recipient of the 1957
        Nobel Prize in Literature at the age of 44, the second-youngest recipient in history.`
    },
    {
        id: generateId(),
        name: "Anton Chekhov",
        desc: `Anton Pavlovich Chekhov was a Russian playwright and short-story writer, widely
        considered to be one of the greatest writers of all time. His career as a playwright produced 
        four classics, and his best short stories are held in high esteem by writers and critics.`
    }
];

const books = [
    {
        id: generateId(),
        name: "Roadside Picnic",
        desc: `Roadside Picnic is a philosophical science fiction novel by the Soviet
        authors Arkady and Boris Strugatsky that was written in 1971 and published in 1972. 
        It is their most popular and most widely translated novel outside the former Soviet Union.`
    },
    {
        id: generateId(),
        name: "Death on the Nile",
        desc: `Death on the Nile is a work of detective fiction by British writer Agatha Christie, 
        published in the UK by the Collins Crime Club on 1 November 1937 and in the US by Dodd, 
        Mead and Company the following year.`
    },
    {
        id: generateId(),
        name: "The Dunwitch Horror",
        desc: `"The Dunwich Horror" is a cosmic horror novella by American writer H. P. 
        Lovecraft. Written in 1928, it was first published in the April 
        1929 issue of Weird Tales. It takes place in Dunwich, a fictional town in Massachusetts. It 
        is considered one of the core stories of the Cthulhu Mythos.`
    },
    {
        id: generateId(),
        name: "Harry Potter and the Goblet of Fire",
        desc: `Harry Potter and the Goblet of Fire is a fantasy novel 
        written by British author J. K. Rowling. It is the fourth novel in the Harry Potter series.`
    },
    {
        id: generateId(),
        name: "The Shadow Over Innsmouth",
        desc: `The Shadow over Innsmouth is a horror novella by American author H. P.
        Lovecraft, written in November - December 1931. `
    },
    {
        id: generateId(),
        name: "Animal Farm",
        desc: `Animal Farm is a satirical allegorical dystopian novella, 
        in the form of a beast fable, by George Orwell, first published in England on 17 August 1945.`
    }
];

async function getAuthorById(id)
{
    return authors.find((author) => author.id === id);
}

async function getAllAuthors()
{
    return [...authors];
}

async function addAuthor(name, bio)
{
    authors.push({
        id: generateId(),
        name: name,
        desc: bio
    });
}

async function getBookById(id)
{
    return books.find((book) => book.id === id);
}

async function getAllBooks()
{
    return [...books];
}

const DB = {
    getAuthorById,
    getAllAuthors,
    addAuthor,
    getBookById,
    getAllBooks
};

export default DB;