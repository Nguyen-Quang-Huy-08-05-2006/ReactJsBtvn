import { useEffect, useState } from "react";
import { notification } from "antd";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student { id: number; student_name: string; email: string; }

const Bai5 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);

  const loadData = async () => {
    const { data } = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => { loadData(); }, []);

  const handleAdd = async (values: { student_name: string; email: string }) => {
    if (editing) { await updateStudent(editing.id, values); setEditing(null); notification.success({ message: "Cập nhật thành công" }); }
    else { await addStudent(values); notification.success({ message: "Thêm thành công" }); }
    loadData();
  };

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    notification.success({ message: "Xóa thành công" });
    loadData();
  };

  return (
    <div>
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <StudentTable students={students} onDelete={handleDelete} onEdit={setEditing} />
    </div>
  );
};

export default Bai5;
