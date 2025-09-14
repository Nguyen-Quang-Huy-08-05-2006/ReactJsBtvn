type ConditionCallback = (result: boolean) => void;

const checkCondition = (condition: boolean, callback: ConditionCallback): void => {
  setTimeout(() => {
    callback(condition);
  }, 1000); 
};

const display = (result: boolean): void => {
  console.log(`Điều kiện trả về: ${result}`);
};

checkCondition(true, display); 
checkCondition(false, display); 
