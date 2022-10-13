class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.")
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${book.bookName} has already been paid.`);
        }

        book.payed = true;
        return `${book.bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let bookIndex = -1;
        let book = {};

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName == bookName) {
                bookIndex = i;
                book = this.books[i];
                break;
            }
        }

        if (bookIndex == -1) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = [];

        if (!bookAuthor) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(b => result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? "Has Paid." : "Not Paid."}`));

            return result.join('\n');
        }

        let book = this.books.find(b => b.bookAuthor == bookAuthor);

        if (!book) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid." : "Not Paid."}`;
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
