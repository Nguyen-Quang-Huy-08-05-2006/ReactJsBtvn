import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";

const ListUser: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Danh sách User</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.userName} - {user.address}{" "}
            <button
              onClick={() =>
                dispatch({ type: "SET_CURRENT_USER", payload: user.id })
              }
            >
              Xem Profile
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
