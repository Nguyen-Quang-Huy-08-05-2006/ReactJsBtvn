class ListBook {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `${this.title} - ${this.author}`;
    }
}

class Library {
    private Listbooks: ListBook[] = [];

    public addListBook(Listbook: ListBook): void {
        this.Listbooks.push(Listbook);
    }

    public showListBooks(): void {
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