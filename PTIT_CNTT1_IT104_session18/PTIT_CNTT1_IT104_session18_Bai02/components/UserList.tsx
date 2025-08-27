import React, { useMemo } from "react";

export default function UserList() {
  const users = [
    { id: 1, name: "A", age: 17 },
    { id: 2, name: "B", age: 20 },
    { id: 3, name: "C", age: 22 },
    { id: 4, name: "D", age: 16 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
