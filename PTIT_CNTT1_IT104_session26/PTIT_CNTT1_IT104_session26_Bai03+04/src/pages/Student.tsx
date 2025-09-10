import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Student = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const studentName = searchParams.get("a") || "";
  const [input, setInput] = useState(studentName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ a: input });
  };

  return (
    <div>
      <p>URL sau khi tìm kiếm : {studentName}</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Student;
