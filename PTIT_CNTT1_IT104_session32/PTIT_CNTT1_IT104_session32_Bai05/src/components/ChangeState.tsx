import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../page";

const ChangeState: React.FC = () => {
  const company = useSelector((state: RootState) => state.company.name);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY" });
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Company: {company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
};

export default ChangeState;
