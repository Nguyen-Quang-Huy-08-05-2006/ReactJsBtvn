import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getAllStudent, addStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

interface Student {
  id: number;
  student_name: string;
  email: string;
}

const Bai3 = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 3;

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

  const start = (page - 1) * pageSize;
  const pagedData = students.slice(start, start + pageSize);

  return (
    <div style={{ padding: 20 }}>
      <StudentForm onSubmit={handleAdd} initialValues={editing || undefined} />
      <StudentTable
        students={pagedData}
        onDelete={handleDelete}
        onEdit={(student) => setEditing(student)}
      />
      <Pagination
        current={page}
        total={students.length}
        pageSize={pageSize}
        onChange={(p) => setPage(p)}
        style={{ marginTop: 10 }}
      />
    </div>
  );
};

export default Bai3;
