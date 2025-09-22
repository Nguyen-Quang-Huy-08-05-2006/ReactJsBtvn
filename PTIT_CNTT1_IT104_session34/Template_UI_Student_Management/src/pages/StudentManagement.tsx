import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import {
  addStudent,
  deleteStudent,
  sortStudents,
  searchStudents,
} from "../redux/actions/studentActions";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { useState } from "react";

const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.students.list);
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleAddStudent = (student: any) => {
    dispatch(addStudent(student));
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      dispatch(deleteStudent(deleteId));
    }
    setOpenDelete(false);
    setDeleteId(null);
  };

  const handleSearch = (keyword: string) => {
    dispatch(searchStudents(keyword));
  };

  const handleSort = () => {
    dispatch(sortStudents());
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} onSort={handleSort} />
        <StudentList students={students} onDelete={handleDeleteClick} />
      </div>
      <StudentForm onSubmit={handleAddStudent} />
      <ConfirmDeleteModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default StudentManagement;
