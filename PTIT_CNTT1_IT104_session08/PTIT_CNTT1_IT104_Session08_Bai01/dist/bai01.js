"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Th\u1EE9 Hai";
    WeekDays["Tuesday"] = "Th\u1EE9 Ba";
    WeekDays["Wednesday"] = "Th\u1EE9 T\u01B0";
    WeekDays["Thursday"] = "Th\u1EE9 N\u0103m";
    WeekDays["Friday"] = "Th\u1EE9 S\u00E1u";
    WeekDays["Saturday"] = "Th\u1EE9 B\u1EA3y";
    WeekDays["Sunday"] = "Ch\u1EE7 Nh\u1EADt";
})(WeekDays || (WeekDays = {}));
console.log("Các ngày trong tuần:");
// Dùng for...in duyệt qua key của enum
for (let day in WeekDays) {
    if (WeekDays.hasOwnProperty(day)) {
        console.log(WeekDays[day]);
    }
}
//# sourceMappingURL=bai01.js.map