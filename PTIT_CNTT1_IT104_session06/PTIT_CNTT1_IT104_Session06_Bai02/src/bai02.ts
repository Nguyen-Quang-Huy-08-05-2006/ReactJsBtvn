abstract class Job {
    type : boolean
    constructor(type:boolean){
        this.type = type
    }
    printType():void{
    }
    abstract calculateSalary():number;
}

class PartimeJob extends Job{
    workingHour: number
    constructor(type:boolean,workingHour:number){
        super(type);
        this.workingHour = workingHour
    }
    printType(): void {
        if(!this.type)
        console.log("Part time job: ");
    }

    calculateSalary(): number {
        return 30000 * this.workingHour
    }
}

class FullTimeJob extends Job{
    printType(): void {
    if(this.type){
            console.log(("Full time Job: "));
        }
    }

    calculateSalary(): number {
        return 10000000
    }
}

const job:Job[] = [
    new PartimeJob(false, 5000),
    new FullTimeJob(true)
]

job.forEach(j => {
    j.printType();
    console.log("Salary:", j.calculateSalary());
});