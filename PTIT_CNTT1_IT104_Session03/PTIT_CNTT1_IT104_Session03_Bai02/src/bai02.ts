let username:string = "Alice"
username:number = 123

//Lỗi TypeScript: Type 'number' is not assignable to type 'string'.
// TypeScript sử dụng hệ thống kiểu tĩnh (static type system),
// nghĩa là kiểu dữ liệu của biến được kiểm tra ngay tại thời điểm biên dịch.
// Một khi đã khai báo là string, biến đó chỉ có thể chứa giá trị kiểu string.