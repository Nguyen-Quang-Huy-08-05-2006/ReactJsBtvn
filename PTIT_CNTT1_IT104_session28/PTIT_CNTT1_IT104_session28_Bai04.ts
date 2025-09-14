type NumberCallback = (value: number) => void;

const displayNumbers = (callback: NumberCallback, delay: number): void => {
  let count = 1;
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
};

const logNumber = (num: number): void => {
  console.log(`Số thứ tự: ${num}`);
};

displayNumbers(logNumber, 1000); 
