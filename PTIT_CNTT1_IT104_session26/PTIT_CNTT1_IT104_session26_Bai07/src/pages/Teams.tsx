import { Outlet, Link } from "react-router-dom";

const Teams = () => {
  return (
    <div>
      <h2>Teams Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/teams">Teams Index</Link>
          </li>
          <li>
            <Link to="/teams/1">Team 1</Link>
          </li>
          <li>
            <Link to="/teams/2">Team 2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Teams;
