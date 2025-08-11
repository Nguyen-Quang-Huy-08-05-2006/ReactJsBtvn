"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    printType() {
        if (!this.type)
            console.log("Part time job: ");
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FullTimeJob extends Job {
    printType() {
        if (this.type) {
            console.log(("Full time Job: "));
        }
    }
    calculateSalary() {
        return 10000000;
    }
}
const job = [
    new PartimeJob(false, 5000),
    new FullTimeJob(true)
];
job.forEach(j => {
    j.printType();
    console.log("Salary:", j.calculateSalary());
});
//# sourceMappingURL=bai02.js.map