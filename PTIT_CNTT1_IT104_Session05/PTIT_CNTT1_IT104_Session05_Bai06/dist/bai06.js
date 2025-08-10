"use strict";
class ListBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
}
class Library {
    constructor() {
        this.Listbooks = [];
    }
    addListBook(Listbook) {
        this.Listbooks.push(Listbook);
    }
    showListBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.Listbooks.forEach((b, i) => {
            console.log(`${i + 1}. ${b.getInfo()}`);
        });
    }
}
const library = new Library();
const ListbookList = [
    new ListBook("Lao Hac", "Nam Cao"),
    new ListBook("Đat Rung Phương Nam", "Đoon Gioi"),
    new ListBook("Bi Vo", "Nguyen Hong"),
    new ListBook("So do", "Vu Trong Phung"),
    new ListBook("Chi Pheo", "Nam Cao"),
];
ListbookList.forEach(Listbook => library.addListBook(Listbook));
library.showListBooks();
//# sourceMappingURL=bai06.js.map