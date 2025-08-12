class Account {
    public accNumber:string
    protected balance:number
    protected history:string[] = []
    protected status:boolean
    constructor(accNumber:string,balance:number,status:boolean){
        this.accNumber = accNumber
        this.balance = balance
        this.status =status
    }

    deposit(money:number):void{
        this.balance += money
        this.history.push(`STK: ${this.accNumber} Nap: ${money} vao tai khoan, so du hien tai: ${this.balance}VND`)
    }

    widthdraw(money:number):void{
        this.balance -= money
        this.history.push(`STK: ${this.accNumber} Rut: ${money} tu tai khoan, so du hien tai: ${this.balance}VND`)
    }

    showHistory():void{
        this.history.forEach(h=>{console.log(h);
        })
    }
}

class SavingAccount extends Account{
    interestRate:number
    constructor(accNumber:string,balance:number,status:boolean,interestRate:number){
        super(accNumber,balance,status)
        this.interestRate = interestRate
    }
    widthdraw(money: number): void {
        if(this.balance - money < 0){
            console.log("Ban khong du so du de rut tien");
        }else{
            this.balance -= money
            this.history.push(`STK: ${this.accNumber} Rut: ${money} tu tai khoan, so du hien tai: ${this.balance}VND`)
        }
    }
}

const user1 = new Account("0666999",1000000,true)
user1.deposit(500000)
user1.widthdraw(200000)
user1.showHistory()

const user2 = new SavingAccount("012345",5000000,true,0.5)
user2.deposit(2000000)
user2.widthdraw(500000)
user2.widthdraw(7000000)
user2.showHistory() 