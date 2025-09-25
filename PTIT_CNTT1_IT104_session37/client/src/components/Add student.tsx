import { useState } from "react";
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
  onStudentAdded: (student: Student) => void;
  existingStudents: Student[];
}

const AddStudent: React.FC<Props> = ({
  open,
  onClose,
  onStudentAdded,
  existingStudents,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [grade, setGrade] = useState("");

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Tên sinh viên không được để trống");
      return;
    }
    if (existingStudents.some((s) => s.name === name)) {
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

    const res = await axios.post("http://localhost:8080/students", {
      name,
      age,
      grade,
    });

    onStudentAdded(res.data);
    onClose();
    setName("");
    setAge(0);
    setGrade("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Student</DialogTitle>
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

export default AddStudent;
