import React from "react";
import { ThemeProvider } from "../Components/ThemeContext";
import Header from "../Components/Header";
import Content from "../Components/Content";
import "../Components/App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
