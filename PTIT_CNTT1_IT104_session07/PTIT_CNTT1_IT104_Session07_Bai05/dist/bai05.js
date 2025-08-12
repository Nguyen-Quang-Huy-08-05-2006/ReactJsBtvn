"use strict";
class Account {
    constructor(id, userName, password, isLogIn, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogIn = isLogIn;
        this.role = role;
    }
    logOut() {
        if (this.isLogIn) {
            console.log(`Dang xuat thanh cong`);
            this.isLogIn = false;
        }
        else { }
    }
}
var USerStatus;
(function (USerStatus) {
    USerStatus["Active"] = "Active";
    USerStatus["Banned"] = "Banned";
})(USerStatus || (USerStatus = {}));
class UserAcc extends Account {
    constructor(id, userName, password, isLogIn, role, status) {
        super(id, userName, password, isLogIn, role);
        this.status = status;
    }
    logIn() {
        if (this.status === USerStatus.Active) {
            this.isLogIn = true;
            console.log("Dang nhap thanh cong");
        }
        else {
            console.log("Tai khoan da bi khoa");
        }
    }
}
const account1 = new Account("01", "Nguyen Van A", "1234567890", true, "User");
account1.logOut();
const account2 = new Account("02", "Nguyen Van B", "1234567890", false, "User");
account2.logOut();
const account3 = new UserAcc("01", "Nguyen Van A", "1234567890", true, "User", USerStatus.Active);
account3.logIn();
const account4 = new UserAcc("01", "Nguyen Van A", "1234567890", true, "User", USerStatus.Banned);
account4.logIn();
//# sourceMappingURL=bai05.js.map