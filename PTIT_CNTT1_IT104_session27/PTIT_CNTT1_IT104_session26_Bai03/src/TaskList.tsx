import { Link } from "react-router-dom";

const tasks = [
  { id: 1, title: "Học React", description: "Học cơ bản về React và JSX" },
  {
    id: 2,
    title: "Làm bài tập",
    description: "Hoàn thành bài tập React Router",
  },
  { id: 3, title: "Đọc tài liệu", description: "Đọc thêm docs về useReducer" },
];

export default function TaskList() {
  return (
    <div>
      <h1>Danh sách công việc</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
