let phoneBooks = [];

let name1 = "John Doe";
let phone1 = "0123456789";
let email1 = "john@example.com";
let contact1 = {
  name: name1,
  phone: phone1,
  email: email1,
};
phoneBooks.push(contact1);
let name2 = "Anna Smith";
let phone2 = "0987654321";
let email2 = "anna@example.com";
let contact2 = {
  name: name2,
  phone: phone2,
  email: email2,
};
phoneBooks.push(contact2);
console.log("DANH BẠ LIÊN HỆ");
for (let i = 0; i < phoneBooks.length; i++) {
  let contact = phoneBooks[i];
  console.log(`Liên hệ ${i + 1}:`);
  console.log(`  Tên: ${contact.name}`);
  console.log(`  Số điện thoại: ${contact.phone}`);
  console.log(`  Email: ${contact.email}`);
}
