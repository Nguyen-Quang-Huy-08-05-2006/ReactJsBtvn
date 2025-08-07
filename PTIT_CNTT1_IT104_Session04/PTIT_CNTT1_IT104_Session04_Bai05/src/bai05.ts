type Person ={
    name: string,
    age: number,
}

type Employee={
    employeeld: string,
    department: string,
}

type StaffMember = Person & Employee

const printStaffInfo =(staff: StaffMember):void=>{
    console.log(`Nhân viên: ${staff.name} (${staff.age}) , Mã nhân viên: ${staff.employeeld} - Phòng: ${staff .department}`);   
}

const staff1:StaffMember={
    name: "Nguyễn Văn A",
    age: 28,
    employeeld:"EMP001",
    department: "Kế toán",
}
printStaffInfo(staff1);