"use strict";
class ListBook {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `${this.id} - ${this.title} - ${this.author}`;
    }
    updateListBook(title, author) {
        this.title = title;
        this.author = author;
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
        console.log("Danh sach sach trong thu vien:");
        this.Listbooks.forEach((b, i) => {
            console.log(`${i + 1}. ${b.getInfo()}`);
        });
    }
    updateListBookById(id, title, author) {
        const Listbook = this.Listbooks.find(b => b.getId() === id);
        if (Listbook) {
            Listbook.updateListBook(title, author);
            console.log(`Da cap nhat thong tin sach co ID ${id}`);
        }
        else {
            console.log(`Khong tim thay sach co ID ${id}`);
        }
    }
}
const library = new Library();
const ListbookList = [
    new ListBook(1, "Lao Hac", "Nam Cao"),
    new ListBook(2, "Dat rung phuong nam", "Doan Gioi"),
    new ListBook(3, "Bi Vo", "Nguyen Hong"),
    new ListBook(4, "So Do", "Vu Trong Phung"),
    new ListBook(5, "Chi Pheo", "Nam Cao"),
];
ListbookList.forEach(Listbook => library.addListBook(Listbook));
console.log("Truoc khi cap nhat:");
library.showListBooks();
library.updateListBookById(3, "Song Mon", "Nguyen Van A");
console.log("\nSau khi cap nhat:");
library.showListBooks();
//# sourceMappingURL=bai07.js.map