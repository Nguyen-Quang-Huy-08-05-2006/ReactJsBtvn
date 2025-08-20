import React, { useState } from "react";

function ThemeApp() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"english" | "vietnamese">("english");

  const text = {
    english: {
      theme: theme === "light" ? "Light" : "Dark",
      language: "English",
    },
    vietnamese: {
      theme: theme === "light" ? "Sáng" : "Tối",
      language: "Tiếng Việt",
    },
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "200px",
        padding: "20px",
      }}
    >
      <h2>Nền: {text[language].theme}</h2>
      <h2>Ngôn ngữ: {text[language].language}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Đổi theme
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            setLanguage(language === "english" ? "vietnamese" : "english")
          }
        >
          Đổi ngôn ngữ
        </button>
      </div>
    </div>
  );
}

export default ThemeApp;
