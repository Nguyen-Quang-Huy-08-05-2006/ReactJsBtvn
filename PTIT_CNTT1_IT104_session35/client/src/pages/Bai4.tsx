import { useEffect, useState } from "react";
import { Select } from "antd";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student { id: number; student_name: string; email: string; }

const Bai4 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const loadData = async () => {
    const { data } = await getAllStudent();
    setStudents(data);
  };

  useEffect(() => { loadData(); }, []);

  const handleAdd = async (values: { student_name: string; email: string }) => {
    if (editing) { await updateStudent(editing.id, values); setEditing(null); }
    else { await addStudent(values); }
    loadData();
  };

  const handleDelete = async (id: number) => { await deleteStudent(id); loadData(); };

  const sorted = [...students].sort((a, b) =>
    sort === "asc"
      ? a.student_name.localeCompare(b.student_name)
      : b.student_name.localeCompare(a.student_name)
  );

  return (
    <div>
      <Select value={sort} onChange={(v) => setSort(v)} style={{ marginBottom: 10, width: 200 }}>
        <Select.Option value="asc">Tăng dần</Select.Option>
        <Select.Option value="desc">Giảm dần</Select.Option>
      </Select>
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <StudentTable students={sorted} onDelete={handleDelete} onEdit={setEditing} />
    </div>
  );
};

export default Bai4;
