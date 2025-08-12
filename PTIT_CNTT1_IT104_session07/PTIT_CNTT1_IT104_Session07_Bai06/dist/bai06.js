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
    ban() {
        this.status = USerStatus.Banned;
        console.log(`Da ban user`);
    }
    getId() {
        return this.id;
    }
}
class AdminAcc extends Account {
    constructor(id, userName, password, isLogIn, role) {
        super(id, userName, password, isLogIn, role);
    }
    banUser(id, users) {
        const user = users.find(u => u.getId() === id);
        if (user) {
            user.ban();
        }
        else {
            console.log(`Khong thay user co id: ${id}`);
        }
    }
}
const users = [
    new UserAcc("03", "Nguyen Van A", "1234567890", true, "User", USerStatus.Active),
    new UserAcc("04", "Nguyen Van A", "1234567890", true, "User", USerStatus.Banned),
];
const admin1 = new AdminAcc("00", "Nguyen Quang Huy", "******", true, "admin");
admin1.banUser("03", users);
//# sourceMappingURL=bai06.js.map