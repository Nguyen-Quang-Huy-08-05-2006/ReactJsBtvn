type FilterCallback<T> = (element: T, searchValue: T, array: T[]) => boolean;

const myFilter = <T>(arr: T[], searchValue: T, callback: FilterCallback<T>): T[] => {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], searchValue, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

const isEqual = (element: number, searchValue: number, array: number[]): boolean => {
  return element === searchValue;
};

const number: number[] = [1, 2, 2, 3, 4, 5, 6];

console.log(myFilter(number, 2, isEqual)); 
console.log(myFilter(number, 10, isEqual)); 
