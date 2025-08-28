import React, { useState } from "react";

const SimpleForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateName = (value: string) => {
    if (!value.trim()) {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("Trường này là bắt buộc");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);

    if (!nameError && !emailError && name && email) {
      alert("Gửi thành công!");
    }
  };

  const isFormValid = !nameError && !emailError && name && email;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: "20px auto" }}
    >
      <h2>Form đơn giản</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>
          Họ tên:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
            style={{ display: "block", width: "100%", marginTop: "6px" }}
          />
        </label>
        {nameError && (
          <p style={{ color: "red", fontSize: "14px" }}>{nameError}</p>
        )}
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={{ display: "block", width: "100%", marginTop: "6px" }}
          />
        </label>
        {emailError && (
          <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>
        )}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Gửi
      </button>
    </form>
  );
};

export default SimpleForm;
