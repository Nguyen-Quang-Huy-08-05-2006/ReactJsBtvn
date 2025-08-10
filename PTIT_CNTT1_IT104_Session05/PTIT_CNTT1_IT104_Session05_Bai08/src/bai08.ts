class ListBook {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `${this.id} - ${this.title} - ${this.author}`;
    }

    public updateListBook(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Library {
    private Listbooks: ListBook[] = [];

    public addListBook(Listbook: ListBook): void {
        this.Listbooks.push(Listbook);
    }

    public showListBooks(): void {
        console.log("Danh sach sach trong thu vien:");
        this.Listbooks.forEach((b, i) => {
            console.log(`${i + 1}. ${b.getInfo()}`);
        });
    }

    public updateListBookById(id: number, title: string, author: string): void {
        const Listbook = this.Listbooks.find(b => b.getId() === id);
        if (Listbook) {
            Listbook.updateListBook(title, author);
            console.log(`Da cap nhat thong tin sach co ID ${id}`);
        } else {
            console.log(`Khong tim thay sach co ID ${id}`);
        }
    }

    public searchListBookByTitle(keyword: string): void {
        const foundListBooks = this.Listbooks.filter(b => 
            b.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundListBooks.length > 0) {
            console.log(`Ket qua tim kiem voi tu khoa "${keyword}":`);
            foundListBooks.forEach(b => console.log(b.getInfo()));
        } else {
            console.log(`Khong tim thay sach nao voi tu khoa "${keyword}"`);
        }
    }
}

// Khoi tao thu vien
const library = new Library();

// Them sach
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

console.log("\nTim kiem sach:");
library.searchListBookByTitle("so");