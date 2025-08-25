import React, { Component } from "react";

const SubjectList: React.FC = () => {
  const subject: string[] = ["Toan", "Van", "Anh", "Hoa", "Sinh"];

  return (
    <div>
      <h3>Danh sach mon hoc</h3>
      {subject.map((subject, i) => (
        <button key={i} className="text-base">
          {subject}
        </button>
      ))}
    </div>
  );
};

export default SubjectList;
