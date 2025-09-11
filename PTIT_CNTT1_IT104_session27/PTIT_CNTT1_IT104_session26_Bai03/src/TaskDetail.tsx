import { useParams, useNavigate } from "react-router-dom";

const tasks = [
  { id: 1, title: "Học React", description: "Học cơ bản về React và JSX" },
  {
    id: 2,
    title: "Làm bài tập",
    description: "Hoàn thành bài tập React Router",
  },
  { id: 3, title: "Đọc tài liệu", description: "Đọc thêm docs về useReducer" },
];

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Công việc không tồn tại</h2>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}
