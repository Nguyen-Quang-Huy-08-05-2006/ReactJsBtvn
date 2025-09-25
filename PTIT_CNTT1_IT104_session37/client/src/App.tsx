import { useEffect, useState } from "react";
import axios from "axios";
import { Student } from "./types";
import StudentList from "./components/StudentList";
import AddStudent from "./components/Add student";
import EditStudent from "./components/EditStudent";
import SearchStudent from "./components/SearchStudent";
import { Button } from "@mui/material";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
  };

  const handleStudentAdded = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleStudentUpdated = (student: Student) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === student.id ? student : s))
    );
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setOpenEdit(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Xác nhận xóa học sinh?")) {
      await axios.delete(`http://localhost:8080/students/${id}`);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-3xl">🎓</span>
        <h1 className="text-2xl font-bold">Student Manager</h1>
      </div>

      {/* Nút thêm */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenAdd(true)}
        className="mb-4"
      >
        ADD STUDENT
      </Button>

      {/* Thanh tìm kiếm */}
      <SearchStudent searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Danh sách */}
      {filteredStudents.length > 0 ? (
        <StudentList
          students={filteredStudents}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <p className="text-center text-gray-500 mt-6">
          Không có học sinh nào
        </p>
      )}

      {/* Modal thêm */}
      <AddStudent
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onStudentAdded={handleStudentAdded}
        existingStudents={students}
      />

      {/* Modal sửa */}
      <EditStudent
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        student={selectedStudent}
        onStudentUpdated={handleStudentUpdated}
        existingStudents={students}
      />
    </div>
  );
}

export default App;
