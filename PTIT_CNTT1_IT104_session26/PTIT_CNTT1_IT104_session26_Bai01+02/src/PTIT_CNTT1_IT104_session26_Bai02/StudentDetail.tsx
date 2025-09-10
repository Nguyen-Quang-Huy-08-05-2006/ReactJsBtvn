import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { name } = useParams();
  return (
    <div>
      <p>Chi tiet sinh vien</p>
      <p>Name = {name}</p>
    </div>
  );
};

export default StudentDetail;
