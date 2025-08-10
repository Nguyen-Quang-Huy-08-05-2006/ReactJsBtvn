class Vehicle {
  name: string;
  year: number;
  company: string;

  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }

  printInfo(): void {
    console.log(`Ten: ${this.name}, Nam san xuat: ${this.year}, Hang: ${this.company}`);
  }
}

const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Camry", 2022, "Toyota");

vehicle1.printInfo();
vehicle2.printInfo();