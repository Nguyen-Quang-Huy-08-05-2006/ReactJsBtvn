import { useEffect, useState } from "react";
import { Input } from "antd";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student {
  id: number;
  student_name: string;
  email: string;
}

const Bai2 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const { data } = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => {
    loadData();
  }, []);

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

  const filtered = students.filter((s) =>
    s.student_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Input.Search
        placeholder="Tìm theo tên..."
        style={{ marginBottom: 10, width: 300 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <StudentTable
        students={filtered}
        onDelete={handleDelete}
        onEdit={(student) => setEditing(student)}
      />
    </div>
  );
};

export default Bai2;
