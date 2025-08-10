class Employee {
    public id: number;
    public name: string;
    protected company: string;
    private phone: string;

    constructor(id: number, name: string, company: string, phone: string) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

const emp = new Employee(1, "Quang Duy Manh", "fpt Corp", "0365303096");

emp.printInfo();