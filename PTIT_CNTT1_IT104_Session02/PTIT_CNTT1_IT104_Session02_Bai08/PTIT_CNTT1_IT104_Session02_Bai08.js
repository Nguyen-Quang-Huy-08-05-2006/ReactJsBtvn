let user = {
  name: "John",
  age: 25,
  location: {
    city: "Hanoi",
    country: "Vietnam",
  },
  contact: {
    email: "john@example.com",
    phone: "0123456789",
  },
  job: {
    title: "Developer",
    company: "Tech Corp",
  },
};
let name = user.name || "unknown";
let age = user.age || "unknown";
let city = user.location?.city || "unknown";
let country = user.location?.country || "unknown";
let email = user.contact?.email || "unknown";
let phone = user.contact?.phone || "unknown";
let title = user.job?.title || "unknown";
let company = user.job?.company || "unknown";

let result = `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;

console.log(result);
