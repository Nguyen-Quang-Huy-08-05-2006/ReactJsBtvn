class Employee{
  public name:string
  protected company: string
  private phone: string
  constructor(name:string,company:string,phone:string){
    this.name = name
    this.company = company
    this.phone = phone
  }

  getPhone():string{
    return this.phone
  }

  printInfo():void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone number: ${this.phone}`);
  }
}

class Manager extends Employee{
  teamSize:number
  constructor(name:string,company:string,phone:string,teamSize:number){
    super(name,company,phone)
    this.teamSize = teamSize
  }
  printInfoManager(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone number: ${this.getPhone()}`);
    console.log(`Team size: ${this.teamSize}`);
  }
}

const employee = new Employee("Nguyen Van A", "Cong Ty TNHH A", "0123456789");
employee.printInfo()

const manager = new Manager("Nguyen Van B","Cong ty TNHH A","0987654321",10);
manager.printInfoManager()