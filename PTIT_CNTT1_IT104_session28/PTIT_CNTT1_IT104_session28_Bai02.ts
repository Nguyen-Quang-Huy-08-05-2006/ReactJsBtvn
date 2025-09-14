type CallbackType = () => void;

const delayedCallback = (callback: CallbackType, delay: number): void => {
  setTimeout(callback, delay);
};

const sayHello = (): void => {
  console.log("Hello sau 2 giây!");
};

delayedCallback(sayHello, 2000);
