let name = "Nguyễn An";
let weather = "sunny";
let message = "";

if (weather === "sunny") {
  message = `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
} else if (weather === "rainy") {
  message = `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
} else {
  message = `Chào ${name}! Hôm nay thời tiết không xác định.`;
}

console.log(message);
