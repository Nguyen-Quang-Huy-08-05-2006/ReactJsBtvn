type CallbackType3 = (value: number) => void;

const processArray = (arr: number[], callback: CallbackType3): void => {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback(value);
    }, (index + 1) * 1000); 
  });
};

const logElement = (num: number): void => {
  console.log(`Phần tử thứ: ${num}`);
};

processArray([1, 2, 3, 4, 5], logElement);
