"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    // Method thông thường (có nội dung sẵn)
    printTypeInfo() {
        console.log(`Job type: ${this.type ? "Full-time" : "Part-time"}`);
    }
}
class PartTimeJob extends Job {
    constructor(type, workingHours) {
        super(type);
        this.workingHours = workingHours;
    }
    // Bắt buộc viết lại abstract method
    calculateSalary() {
        return this.workingHours * 30000;
    }
}
class FullTimeJob extends Job {
    calculateSalary() {
        return 10000000; // lương cố định
    }
}
// Sử dụng
const jobs = [
    new PartTimeJob(false, 120),
    new FullTimeJob(true)
];
jobs.forEach(job => {
    job.printTypeInfo(); // dùng method có sẵn trong abstract class
    console.log("Salary:", job.calculateSalary()); // gọi method bắt buộc override
});
//# sourceMappingURL=bai03.js.map