import { useEffect, useState } from "react";
import { Spin } from "antd";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student { id: number; student_name: string; email: string; }

const Bai6 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const { data } = await getAllStudent();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => { loadData(); }, []);

  const handleAdd = async (values: { student_name: string; email: string }) => {
    setLoading(true);
    if (editing) { await updateStudent(editing.id, values); setEditing(null); }
    else { await addStudent(values); }
    await loadData();
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    await deleteStudent(id);
    await loadData();
    setLoading(false);
  };

  return (
    <div>
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <Spin spinning={loading}>
        <StudentTable students={students} onDelete={handleDelete} onEdit={setEditing} />
      </Spin>
    </div>
  );
};

export default Bai6;
