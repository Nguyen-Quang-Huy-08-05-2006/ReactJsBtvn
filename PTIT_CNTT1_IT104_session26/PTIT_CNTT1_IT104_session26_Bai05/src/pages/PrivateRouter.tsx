import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  isLogIn: boolean;
  children: React.ReactNode;
}

const PrivateRouter = ({ isLogIn, children }: PrivateRouterProps) => {
  if (!isLogIn) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default PrivateRouter;
