"use strict";
class Staff {
    constructor(fullName, organization, contactNumber) {
        this.fullName = fullName;
        this.organization = organization;
        this.contactNumber = contactNumber;
    }
    showDetails() {
        console.log(`Họ và tên: ${this.fullName}`);
        console.log(`Đơn vị: ${this.organization}`);
        console.log(`Liên hệ: ${this.contactNumber}`);
    }
}
const staffMember = new Staff("Quang Duy Manh", "fpt", "0365303096");
staffMember.showDetails();
//# sourceMappingURL=bai03.js.map