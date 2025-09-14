type TaskCallback = () => void;

const task1 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 1 hoàn thành");
    callback();
  }, 1000);
};

const task2 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 2 hoàn thành");
    callback();
  }, 1500);
};

const task3 = (callback: TaskCallback): void => {
  setTimeout(() => {
    console.log("Task 3 hoàn thành ");
    callback();
  }, 2000);
};

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Tất cả task đã hoàn thành");
    });
  });
});
