abstract class Job {
    type: boolean;
    constructor(type: boolean) {
        this.type = type;
    }

    // Method thông thường (có nội dung sẵn)
    printTypeInfo(): void {
        console.log(`Job type: ${this.type ? "Full-time" : "Part-time"}`);
    }

    // Abstract method (chưa có nội dung)
    abstract calculateSalary(): number;
}

class PartTimeJob extends Job {
    workingHours: number;
    constructor(type: boolean, workingHours: number) {
        super(type);
        this.workingHours = workingHours;
    }

    // Bắt buộc viết lại abstract method
    calculateSalary(): number {
        return this.workingHours * 30000;
    }
}

class FullTimeJob extends Job {
    calculateSalary(): number {
        return 10000000; // lương cố định
    }
}

// Sử dụng
const jobs: Job[] = [
    new PartTimeJob(false, 120),
    new FullTimeJob(true)
];

jobs.forEach(job => {
    job.printTypeInfo();  // dùng method có sẵn trong abstract class
    console.log("Salary:", job.calculateSalary()); // gọi method bắt buộc override
});
