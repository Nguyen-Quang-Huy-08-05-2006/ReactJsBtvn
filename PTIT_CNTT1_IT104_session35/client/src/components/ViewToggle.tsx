import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { toggleMode } from "../features/viewSlice";
import { Button } from "antd";

const ViewToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.view.mode);

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Button onClick={() => dispatch(toggleMode())}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </Button>
    </div>
  );
};

export default ViewToggle;
