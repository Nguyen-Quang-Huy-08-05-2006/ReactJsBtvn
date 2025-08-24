import React, { useState } from "react";

const StudentToolbar = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <select className="border px-3 py-1 rounded">
          <option>Sắp xếp theo tuổi</option>
          <option>Sắp xếp theo tên</option>
        </select>
        <input
          type="text"
          placeholder="Tìm kiếm từ khóa theo tên hoặc email"
          className="border px-3 py-1 rounded w-64"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Thêm mới sinh viên
      </button>
    </div>
  );
};

const StudentRow = ({ index, id, name, dob, email, status }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2 text-center">{index}</td>
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{dob}</td>
      <td className="px-4 py-2">{email}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded text-sm ${
            status === "active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}
        </span>
      </td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm">
          Chặn
        </button>
        <button className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm">
          Sửa
        </button>
        <button className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
          Xóa
        </button>
      </td>
    </tr>
  );
};

const StudentTable = () => {
  const students = [
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      dob: "21/12/2023",
      email: "nva@gmail.com",
      status: "active",
    },
    {
      id: "SV002",
      name: "Nguyễn Thị B",
      dob: "21/11/2022",
      email: "ntb@gmail.com",
      status: "inactive",
    },
  ];

  return (
    <table className="w-full border-collapse border rounded">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">STT</th>
          <th className="px-4 py-2">Mã sinh viên</th>
          <th className="px-4 py-2">Tên sinh viên</th>
          <th className="px-4 py-2">Ngày sinh</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Trạng thái</th>
          <th className="px-4 py-2">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) => (
          <StudentRow key={s.id} index={i + 1} {...s} />
        ))}
      </tbody>
    </table>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button className="px-2 py-1 border rounded">&lt;</button>
      <button className="px-3 py-1 border rounded bg-blue-600 text-white">
        1
      </button>
      <button className="px-3 py-1 border rounded">2</button>
      <button className="px-3 py-1 border rounded">3</button>
      <button className="px-3 py-1 border rounded">4</button>
      <button className="px-2 py-1 border rounded">&gt;</button>
    </div>
  );
};

const StudentManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Quản lý sinh viên</h1>
      <StudentToolbar />
      <StudentTable />
      <Pagination />
    </div>
  );
};

export default StudentManagement;
