function checkElement(array, value) {
  return array.includes(value);
}

console.log(checkElement([1, 2, 3, 4], 3));
console.log(checkElement(["apple", "banana"], "banana"));
console.log(checkElement(["a", "b", "c"], "d"));
console.log(checkElement([true, false], true));
console.log(checkElement([], 1));
