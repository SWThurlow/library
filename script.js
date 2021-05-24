/*Array for books and retrieving html elements.*/
let myLibrary = [{title: 'Death and the Penguin', author: 'Andrey Kurkov', pageCount: 228, read: 'read', index: 0}];

const newTitle = document.getElementById('title');
const newAuthor = document.getElementById('author');
const newPageCount = document.getElementById('pageCount');
const newRead = document.getElementById('read');
const addBook = document.getElementById('addBook')
const library = document.querySelector('.library');

/*Book constructor.*/
class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
        this.index;
    }
    findIndex(){
        this.index = myLibrary.indexOf(this);
    }
    toggleRead() {
        if(this.read === 'not read') {
            this.read = 'read'
        } else {
            this.read = 'not read'
        }
        let thisBook = [...library.childNodes][this.index + 1]
        thisBook.textContent = `You have ${myLibrary[book].read} this title.`;
    }
}

/*Adding new books*/
function newBook() {
    const book = new Book(newTitle.value, newAuthor.value, pageCount.value, read.checked ? 'read' : 'not read');
    myLibrary.push(book);
    book.findIndex();
    displayMyLibrary(book);
}

function displayMyLibrary(book) {
    let cover = document.createElement('div');
    cover.setAttribute('class', 'book');
    cover.setAttribute('data-index', `${myLibrary.indexOf(book)}`)
    let title = document.createElement('h3');
    title.textContent = book.title;
    cover.appendChild(title);
    let author = document.createElement('h3');
    author.textContent = book.author;
    cover.appendChild(author);
    let pageCount = document.createElement('p');
    pageCount.textContent = book.pageCount;
    cover.appendChild(pageCount);
    let unread = document.createElement('p');
    unread.textContent = `You have ${book.read} this title.`;
    cover.appendChild(unread);
    let read =  document.createElement('button');
    read.setAttribute('class', 'read')
    read.textContent = 'Read';
    cover.appendChild(read);
    let remove = document.createElement('button');
    remove.setAttribute('class', 'remove');
    remove.textContent = 'Remove form library';
    cover.appendChild(remove);

    library.appendChild(cover);
}

function removeBook(book) {
    myLibrary.splice(book.dataset.index, 1);
    library.removeChild(book);
    let allBooks = [...library.childNodes];
    for(let i = 1; i < allBooks.length; i++){
        allBooks[i].dataset.index = i - 1;
    }
}

function toggleRead(book, read) {
    if(myLibrary[book].read === 'not read') {
        myLibrary[book].read = 'read'
    } else {
        myLibrary[book].read = 'not read'
    }

    read.textContent = `You have ${myLibrary[book].read} this title.`;
}

/*Event listeners*/
addBook.addEventListener('click', (e) => {
    newBook(e);
});
library.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove')){
        removeBook(e.target.parentNode);
    } else if(e.target.classList.contains('read')){
        toggleRead(e.target.parentNode.dataset.index, e.target.previousElementSibling);
    } else return
});

window.onload = myLibrary.forEach(book => displayMyLibrary(book));