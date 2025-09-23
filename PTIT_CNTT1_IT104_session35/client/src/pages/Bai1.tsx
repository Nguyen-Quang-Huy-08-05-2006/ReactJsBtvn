import { useEffect, useState } from "react";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student {
  id: number;
  student_name: string;
  email: string;
}

const Bai1 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);

  const loadData = async () => {
    const { data } = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => { loadData(); }, []);

  const handleAdd = async (values: { student_name: string; email: string }) => {
    if (editing) {
      await updateStudent(editing.id, values);
      setEditing(null);
    } else {
      await addStudent(values);
    }
    loadData();
  };

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    loadData();
  };

  return (
    <div>
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <StudentTable students={students} onDelete={handleDelete} onEdit={setEditing} />
    </div>
  );
};

export default Bai1;
