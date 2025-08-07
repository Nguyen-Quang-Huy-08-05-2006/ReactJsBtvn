const studentsPoints: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
let sum:number = 0

for (let index = 0; index < studentsPoints.length; index++) {
    sum += studentsPoints[index];
}

console.log(sum/studentsPoints.length);
