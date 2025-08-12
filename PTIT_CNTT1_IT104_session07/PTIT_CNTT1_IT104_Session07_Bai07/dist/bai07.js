"use strict";
class Account {
    constructor(accNumber, balance, status) {
        this.history = [];
        this.accNumber = accNumber;
        this.balance = balance;
        this.status = status;
    }
    deposit(money) {
        this.balance += money;
        this.history.push(`STK: ${this.accNumber} Nap: ${money} vao tai khoan, so du hien tai: ${this.balance}VND`);
    }
    widthdraw(money) {
        this.balance -= money;
        this.history.push(`STK: ${this.accNumber} Rut: ${money} tu tai khoan, so du hien tai: ${this.balance}VND`);
    }
    showHistory() {
        this.history.forEach(h => {
            console.log(h);
        });
    }
}
class SavingAccount extends Account {
    constructor(accNumber, balance, status, interestRate) {
        super(accNumber, balance, status);
        this.interestRate = interestRate;
    }
    widthdraw(money) {
        if (this.balance - money < 0) {
            console.log("Ban khong du so du de rut tien");
        }
        else {
            this.balance -= money;
            this.history.push(`STK: ${this.accNumber} Rut: ${money} tu tai khoan, so du hien tai: ${this.balance}VND`);
        }
    }
}
const user1 = new Account("0666999", 1000000, true);
user1.deposit(500000);
user1.widthdraw(200000);
user1.showHistory();
const user2 = new SavingAccount("012345", 5000000, true, 0.5);
user2.deposit(2000000);
user2.widthdraw(500000);
user2.widthdraw(7000000);
user2.showHistory();
//# sourceMappingURL=bai07.js.map