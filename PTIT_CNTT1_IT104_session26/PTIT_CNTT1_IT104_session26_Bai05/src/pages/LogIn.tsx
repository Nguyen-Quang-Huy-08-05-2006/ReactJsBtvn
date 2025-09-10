import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsLogIn }: LoginProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogIn(true);
    navigate("/account");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
