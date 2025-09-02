import React, { useState, useRef, useEffect } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <button>Mở Modal</button>

      {isOpen && (
        <div>
          <div>
            <h2 style={{ marginBottom: "15px" }}>Nhập thông tin</h2>
            <input ref={inputRef} type="text" />
            <button onClick={() => setIsOpen(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}
