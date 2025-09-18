import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Profile: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  if (!currentUser) return <p>Không có user nào được chọn</p>;

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Profile</h2>
      <p>
        <strong>ID:</strong> {currentUser.id}
      </p>
      <p>
        <strong>UserName:</strong> {currentUser.userName}
      </p>
      <p>
        <strong>Gender:</strong> {currentUser.gender}
      </p>
      <p>
        <strong>Date of Birth:</strong> {currentUser.dateBirth}
      </p>
      <p>
        <strong>Address:</strong> {currentUser.address}
      </p>
    </div>
  );
};

export default Profile;
