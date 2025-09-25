import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Student } from "../types";

interface Props {
  student: Student;
  onDelete: (id: number) => void;
  onEdit: (student: Student) => void;
}

const StudentCard: React.FC<Props> = ({ student, onDelete, onEdit }) => {
  return (
    <Card className="shadow-lg rounded-2xl my-2">
      <CardContent>
        <Typography variant="h6">{student.name}</Typography>
        <Typography color="textSecondary">Age: {student.age}</Typography>
        <Typography color="textSecondary">Grade: {student.grade}</Typography>
        <div className="flex justify-end space-x-2 mt-2">
          <IconButton color="primary" onClick={() => onEdit(student)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => {
              if (window.confirm("Xác nhận xóa học sinh?")) {
                onDelete(student.id);
              }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
