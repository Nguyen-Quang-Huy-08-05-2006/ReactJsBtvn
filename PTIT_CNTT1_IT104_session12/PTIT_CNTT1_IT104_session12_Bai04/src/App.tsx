import React from "react"
import ColorBox from "../component/ColorBox"

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
  );
}

export default App;
