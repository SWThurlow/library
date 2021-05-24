/*Array for books and retrieving html elements.*/
let myLibrary = [];

const additionTitle = document.getElementById('title');
const additionAuthoor = document.getElementById('author');
const additionPageCount = document.getElementById('pageCount');
const additionRead = document.getElementById('read');
const addAddition = document.getElementById('addBook')
const library = document.querySelector('.library');

/*Book constructor.*/
class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
        this.index = myLibrary.indexOf(this);
    }
}

/*Adding new books*/
function newBook() {
    const book = Object.create(Book());
    myLibrary.push(book);
}

function displayMyLibrary() {
    myLibrary.forEach(book => {
        let cover = document.createElement('div');
        cover.setAttribute('class', 'book');
        let title = document.createElement('h3');
        title.setAttribute('class', 'bookTitle');
        title.textContent = this.title;
        cover.appendChild(title);
        let author = document.createElement('h3');
        author.setAttribute('class', 'author');
        author.textContent = this.author;
        cover.appendChild(author);
        let pageCount = document.createElement('p');
        pageCount.setAttribute('class', 'pages')
        pageCount.textContent = this.pageCount;
        cover.appendChild(pageCount);
        let unread = document.createElement('p');
        unread.setAttribute('class', 'unread');
        unread.textContent = `You have ${this.read} this title.`;
        cover.appendChild(unread);
        let read =  document.createElement('button');
        read.setAttribute('class', 'read')
        read.textContent = 'Read';
        cover.appendChild(read);
        let remove = document.createElement('button');
        remove.setAttribute('class', 'remove');
        remove.textContent = 'Remove form library';
        cover.appendChild(remove);
    });
}

function removeBook() {
    let book = e.target.parentNode;
    library.removeChild(book);

}

/*Event listeners*/
addAddition.addEventListener('click', (e) => {
    newBook(e);
    displayMyLibrary();
})