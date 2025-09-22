import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import React from "react";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
}

type InputChangeEvent =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const [form, setForm] = React.useState<Student>({
    id: Date.now(),
    fullName: "",
    age: 18,
    gender: true,
    dateOfBirth: new Date(),
    placeOfBirth: "",
    address: "",
  });

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    if (name === "dateOfBirth") {
      setForm({ ...form, dateOfBirth: new Date(value) });
    } else if (name === "age" || name === "id") {
      setForm({ ...form, [name]: Number(value) });
    } else if (name === "gender") {
      setForm({ ...form, gender: value === "true" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!form.fullName) return;
    onSubmit(form);
    setForm({
      id: Date.now(),
      fullName: "",
      age: 18,
      gender: true,
      dateOfBirth: new Date(),
      placeOfBirth: "",
      address: "",
    });
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          type="number"
          value={form.id}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
        />
        <Select
          name="gender"
          value={form.gender.toString()}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="true">Nam</MenuItem>
          <MenuItem value="false">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="dateOfBirth"
          value={form.dateOfBirth.toISOString().split("T")[0]}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="placeOfBirth"
          value={form.placeOfBirth}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
