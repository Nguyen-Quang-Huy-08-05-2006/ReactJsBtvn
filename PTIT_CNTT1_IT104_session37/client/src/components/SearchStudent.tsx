import { TextField } from "@mui/material";

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchStudent: React.FC<Props> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="my-4">
      <TextField
        label="Tìm theo tên"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
      />
    </div>
  );
};

export default SearchStudent;
