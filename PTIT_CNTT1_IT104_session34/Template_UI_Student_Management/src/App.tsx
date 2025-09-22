import { useDispatch, useSelector } from "react-redux";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Toolbar from "./components/Toolbar";
import {
  addStudent,
  deleteStudent,
  searchStudent,
  sortStudent,
} from "./redux/actions/studentActions";
import type { Student } from "./utils/types";

function App() {
  const dispatch = useDispatch();
  const students = useSelector((state: any) => state.studentState.filtered);

  const handleAdd = (student: Student) => dispatch(addStudent(student));
  const handleDelete = (id: number) => dispatch(deleteStudent(id));
  const handleSearch = (keyword: string) => dispatch(searchStudent(keyword));
  const handleSort = (by: "name" | "age") => dispatch(sortStudent(by));

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} onSort={handleSort} />
        <StudentList students={students} onDelete={handleDelete} />
      </div>
      <StudentForm onSubmit={handleAdd} />
    </div>
  );
}

export default App;
