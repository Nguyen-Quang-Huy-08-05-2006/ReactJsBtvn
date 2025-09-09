import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>User không tồn tại</h2>;
  }

  return (
    <div>
      <h3>Thông tin chi tiết</h3>
      <p>Id: {user.id}</p>
      <p>UserName: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <Link to="/">
        <button>Quay lại danh sách</button>
      </Link>
    </div>
  );
}

export default UserDetail;
