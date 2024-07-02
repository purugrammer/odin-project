const myLibrary = [
    {
        title: "The Lord Of The Rings",
        author: "J.R.R. Tolkien",
        pages: 1296,
        read_or_not: "Read"
    },
    {
        title: "Ramayana",
        author: "Valmiki",
        pages: 1700,
        read_or_not: "Read"
    },
    {
        title: "Notes from Underground",
        author: "Fyodor Dostoevsky",
        pages: 140,
        read_or_not: "Unread"
    }
]

function Book(title, author, pages, read_or_not) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_or_not = read_or_not;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displaySingleBook(book);
}

function displaySingleBook(book) {

    const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        librarySection.appendChild(bookCard);
        
        const bookLogo = document.createElement('div');
        bookLogo.classList.add('book-logo');
        bookLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-variant</title><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z" /></svg>`;
        bookCard.appendChild(bookLogo);

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('book-title')
        bookTitle.textContent = book.title
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('div')
        bookAuthor.classList.add('book-author')
        bookAuthor.textContent = book.author
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('div')
        bookPages.classList.add('book-pages')
        bookPages.textContent = book.pages + ' Pages'
        bookCard.appendChild(bookPages);

        const readButton = document.createElement('button')
        readButton.classList.add('book-read')
        readButton.textContent = book.read_or_not
        bookCard.appendChild(readButton);

        readButton.addEventListener('click', () => {
            if (book.read_or_not === 'Read'){
                book.read_or_not = 'Unread'
            }
            else{
                book.read_or_not = 'Read'
            }
            readButton.textContent = book.read_or_not

        })

        const removeButton = document.createElement('div')
        removeButton.classList.add('book-remove')
        removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
        bookCard.appendChild(removeButton)

        removeButton.addEventListener('click', () => {
            const index = myLibrary.indexOf(book);
            if (index > -1) {
                myLibrary.splice(index, 1);
                bookCard.remove();
            }
        });
}

const librarySection = document.querySelector(".main")

function displayBook() {
    myLibrary.forEach(book => {

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        librarySection.appendChild(bookCard);
        
        const bookLogo = document.createElement('div');
        bookLogo.classList.add('book-logo');
        bookLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-variant</title><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z" /></svg>`;
        bookCard.appendChild(bookLogo);

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('book-title')
        bookTitle.textContent = book.title
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('div')
        bookAuthor.classList.add('book-author')
        bookAuthor.textContent = book.author
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('div')
        bookPages.classList.add('book-pages')
        bookPages.textContent = book.pages + ' Pages'
        bookCard.appendChild(bookPages);

        const readButton = document.createElement('button')
        readButton.classList.add('book-read')
        readButton.textContent = book.read_or_not
        bookCard.appendChild(readButton);

        readButton.addEventListener('click', () => {
            if (book.read_or_not === 'Read'){
                book.read_or_not = 'Unread'
            }
            else{
                book.read_or_not = 'Read'
            }
            readButton.textContent = book.read_or_not

        })

        const removeButton = document.createElement('div')
        removeButton.classList.add('book-remove')
        removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
        bookCard.appendChild(removeButton)

        removeButton.addEventListener('click', () => {
            const index = myLibrary.indexOf(book);
            if (index > -1) {
                myLibrary.splice(index, 1);
                bookCard.remove();
            }
        });

    });
}

const newBookButton = document.querySelector("svg")
const formCard = document.querySelector(".form-card");
const closeFormButton = document.querySelector("#close-form");
const form = document.querySelector("#new-book-form");

newBookButton.addEventListener('click', toggleFormCard);
closeFormButton.addEventListener("click", toggleFormCard);

function toggleFormCard() {
    formCard.classList.toggle("hidden");
  }

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const read = document.querySelector('input[name="read-unread"]:checked').value;

    if (title && author && pages) {
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    form.reset();
    toggleFormCard();
} 

else {
    alert("Please fill in all fields");
}
});

displayBook()

