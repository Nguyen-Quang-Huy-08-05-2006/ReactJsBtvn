import React from "react";

interface Account {
  id: number;
  fullName: string;
  dob: string;
  gender: string;
  address: string;
}

const AccountList: React.FC = () => {
  const accounts: Account[] = [
    { id: 1, fullName: "Nguyễn Văn A", dob: "01/01/2000", gender: "Nam", address: "Hà Nội" },
    { id: 2, fullName: "Trần Thị B", dob: "12/05/2001", gender: "Nữ", address: "Hồ Chí Minh" },
    { id: 3, fullName: "Lê Văn C", dob: "23/07/1999", gender: "Nam", address: "Đà Nẵng" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Danh sách tài khoản</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Họ tên</th>
            <th className="border px-4 py-2">Ngày sinh</th>
            <th className="border px-4 py-2">Giới tính</th>
            <th className="border px-4 py-2">Địa chỉ</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{account.fullName}</td>
              <td className="border px-4 py-2">{account.dob}</td>
              <td className="border px-4 py-2">{account.gender}</td>
              <td className="border px-4 py-2">{account.address}</td>
              <td className="border px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Sửa
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
