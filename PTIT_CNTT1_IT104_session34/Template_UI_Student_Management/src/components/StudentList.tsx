import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Delete } from "@mui/icons-material";
import type { Student } from "../utils/types";

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Mã SV</TableCell>
          <TableCell>Họ Tên</TableCell>
          <TableCell>Tuổi</TableCell>
          <TableCell>Giới tính</TableCell>
          <TableCell>Ngày sinh</TableCell>
          <TableCell>Nơi sinh</TableCell>
          <TableCell>Địa chỉ</TableCell>
          <TableCell>Hành động</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((s) => (
          <TableRow key={s.id}>
            <TableCell>{s.id}</TableCell>
            <TableCell>{s.fullName}</TableCell>
            <TableCell>{s.age}</TableCell>
            <TableCell>{s.gender ? "Nam" : "Nữ"}</TableCell>
            <TableCell>{s.dateOfBirth.toLocaleDateString("vi-VN")}</TableCell>
            <TableCell>{s.placeOfBirth}</TableCell>
            <TableCell>{s.address}</TableCell>
            <TableCell>
              <IconButton color="error" onClick={() => onDelete(s.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentList;
