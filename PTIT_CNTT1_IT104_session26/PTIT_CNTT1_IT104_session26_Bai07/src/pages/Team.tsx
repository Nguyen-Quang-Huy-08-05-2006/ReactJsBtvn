import { useParams } from "react-router-dom";

const Team = () => {
  const { teamId } = useParams();

  return (
    <div>
      <h3>Team Detail</h3>
      <p>Đây là thông tin chi tiết của team có ID: {teamId}</p>
    </div>
  );
};

export default Team;
