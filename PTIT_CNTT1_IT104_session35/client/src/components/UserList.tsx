import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchUsers, toggleFavorite, switchViewMode } from "../features/userSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error, viewMode } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Đang tải...</p>;
  if (status === "failed") return <p>Lỗi: {error}</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(switchViewMode())}
        className="px-4 py-2 mb-4 border rounded"
      >
        {viewMode === "list" ? "Grid mode" : "List mode"}
      </button>

      <div
        className={
          viewMode === "list"
            ? "flex flex-col gap-3"
            : "grid grid-cols-4 gap-3"
        }
      >
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-red-500 text-white p-4 rounded cursor-pointer flex justify-between items-center"
            onClick={() => dispatch(toggleFavorite(user.id))}
          >
            <span>
              {user.name} {user.favorite ? "❤️" : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
