import { Grid } from "@mui/material";
import { Student } from "../types";
import StudentCard from "./StudentCard";

interface Props {
  students: Student[];
  onDelete: (id: number) => void;
  onEdit: (student: Student) => void;
}

const StudentList: React.FC<Props> = ({ students, onDelete, onEdit }) => {
  return (
    <Grid container spacing={2} className="mt-4">
      {students.map((s) => (
        <Grid item xs={12} sm={6} md={4} key={s.id}>
          <StudentCard student={s} onDelete={onDelete} onEdit={onEdit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentList;
