import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Student } from "../types";

interface Props {
  open: boolean;
  onClose: () => void;
  student: Student | null;
  onStudentUpdated: (student: Student) => void;
  existingStudents: Student[];
}

const EditStudent: React.FC<Props> = ({
  open,
  onClose,
  student,
  onStudentUpdated,
  existingStudents,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [grade, setGrade] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setGrade(student.grade);
    }
  }, [student]);

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Tên sinh viên không được để trống");
      return;
    }
    if (
      existingStudents.some(
        (s) => s.name === name && s.id !== student?.id
      )
    ) {
      alert("Tên sinh viên đã tồn tại");
      return;
    }
    if (age <= 0) {
      alert("Tuổi phải lớn hơn 0");
      return;
    }
    if (!grade.trim()) {
      alert("Lớp học không được để trống");
      return;
    }

    const res = await axios.put(
      `http://localhost:8080/students/${student?.id}`,
      { name, age, grade }
    );

    onStudentUpdated(res.data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent className="flex flex-col gap-3 mt-2">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditStudent;
