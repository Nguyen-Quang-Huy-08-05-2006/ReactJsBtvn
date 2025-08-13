enum WeekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

console.log("Các ngày trong tuần:");
// Dùng for...in duyệt qua key của enum
for (let day in WeekDays) {
    if (WeekDays.hasOwnProperty(day)) {
        console.log(WeekDays[day as keyof typeof WeekDays]);
    }
}
