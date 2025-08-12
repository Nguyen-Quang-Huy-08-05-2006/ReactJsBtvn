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
class CheckingAccount extends Account {
    constructor(accNumber, balance, status, overDraftLimit) {
        super(accNumber, balance, status);
        this.overDraftLimit = overDraftLimit;
    }
    widthdraw(money) {
        if (this.balance - money >= 0) {
            this.balance -= money;
            this.history.push(`STK: ${this.accNumber} Rut: ${money} tu tai khoan, so du hien tai: ${this.balance}VND, han muc thau chi: ${this.overDraftLimit}`);
        }
        else if (money <= this.overDraftLimit && this.balance === 0) {
            this.overDraftLimit -= money;
            this.history.push(`STK: ${this.accNumber} Rut: ${money} tu han muc thau chi, so du hien tai: ${this.balance}VND, han muc thau chi con lai: ${this.overDraftLimit}`);
        }
        else {
            console.log("Ban khong du so du de rut tien");
        }
    }
}
const user2 = new CheckingAccount("012345", 5000000, true, 5000000);
user2.deposit(2000000);
user2.widthdraw(7000000);
user2.widthdraw(6000000);
user2.showHistory();
//# sourceMappingURL=bai08.js.map