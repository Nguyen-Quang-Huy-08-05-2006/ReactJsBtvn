import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log("Timer stopped!");
    };
  }, []);

  return (
    <div>
      <h1>Bộ đếm thời gian</h1>
      <p>Đã trôi qua: {count} giây</p>
    </div>
  );
}
