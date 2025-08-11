"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.books = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBooks {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.book = [];
        this.members = [];
    }
    addBook(book) {
        this.book.push(book);
    }
    showBooks() {
        this.book.forEach(s => {
            console.log(`${s.id}, ${s.title}, ${s.author}, ${s.stock}, ${s.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book("B1", "Lập trình TypeScript", "Nguyễn Văn A", 5, true);
const book2 = new Book("B2", "Học Node.js", "Trần Văn B", 3, true);
const book3 = new Book("B3", "Clean Code", "Robert C. Martin", 2, true);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
//# sourceMappingURL=bai08.js.map