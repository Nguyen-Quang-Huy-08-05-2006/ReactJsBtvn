function flatten<T>(arr: T[][]): T[] {
    let result: T[] = [];
    for (let subArr of arr) {
        result = result.concat(subArr);
    }
    return result;
}

console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
