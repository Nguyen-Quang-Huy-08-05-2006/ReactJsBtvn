import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Email và Mật khẩu không được để trống");
      return;
    }

    const students = JSON.parse(localStorage.getItem("students") || "[]");

    const user = students.find(
      (student: any) =>
        student.email === form.email && student.password === form.password
    );

    if (user) {
      setMessage("✅ Đăng nhập thành công");
    } else {
      setMessage("❌ Đăng nhập thất bại");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Đăng nhập tài khoản
        </h2>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Nhập email"
        />

        <br />

        <label className="block mb-2">Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Nhập mật khẩu"
        />

        <br />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Đăng nhập
        </button>

        {message && (
          <p className="mt-3 text-center font-medium text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
