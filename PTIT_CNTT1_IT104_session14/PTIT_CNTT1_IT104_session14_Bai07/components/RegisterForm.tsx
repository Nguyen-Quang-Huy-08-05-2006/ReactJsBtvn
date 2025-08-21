import React, {
  useState,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  phone: string;
  message: string;
};

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setFormData((prev) => ({
        ...prev,
        message: "Vui lòng điền đầy đủ thông tin!",
      }));
      return;
    }
    const students = JSON.parse(localStorage.getItem("students") || "[]");
    const isExist = students.some((s: FormState) => s.email === formData.email);

    if (isExist) {
      setFormData((prev) => ({ ...prev, message: "Email đã tồn tại!" }));
      return;
    }

    students.push(formData);
    localStorage.setItem("students", JSON.stringify(students));

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      message: "Đăng ký tài khoản thành công!",
    });

    nameRef.current?.focus();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Đăng ký tài khoản
        </h2>

        <label className="block mb-2">Tên sinh viên</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <br />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <br />

        <label className="block mb-2">Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <br />

        <label className="block mb-2">Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <br />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Đăng ký
        </button>

        {formData.message && (
          <p className="mt-3 text-center text-sm text-green-600">
            {formData.message}
          </p>
        )}
      </form>
    </div>
  );
}
