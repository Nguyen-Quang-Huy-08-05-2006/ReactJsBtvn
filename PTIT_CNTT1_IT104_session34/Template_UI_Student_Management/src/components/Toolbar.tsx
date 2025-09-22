import { Button, TextField } 
from "@mui/material";
import React from "react";

interface ToolbarProps {
  onSearch: (keyword: string) => void;
  onSort: (by: "name" | "age") => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onSort }) => {
  const [keyword, setKeyword] = React.useState("");

  return (
    <div className="flex gap-4 mb-4">
      <TextField
        label="Tìm kiếm theo tên"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(keyword);
        }}
      />
      <Button variant="contained" onClick={() => onSearch(keyword)}>
        Tìm kiếm
      </Button>
      <Button variant="outlined" onClick={() => onSort("name")}>
        Sắp xếp theo tên
      </Button>
      <Button variant="outlined" onClick={() => onSort("age")}>
        Sắp xếp theo tuổi
      </Button>
    </div>
  );
};

export default Toolbar;
