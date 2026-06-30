import React, { useEffect, useState } from "react";

const Local = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "David", age: 22 },
  ]);

  const updateUserHanlder = (id) => {
    setUsers((preUser) =>
      preUser.map((user) =>
        user.id === id ? { ...user, age: 25, name: "RAM LAL" } : user,
      ),
    );
  };

  useEffect(() => {
    const setLocal = localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2> Name: {user.name}</h2>
          <h2> Age: {user.age}</h2>
          <button onClick={() => updateUserHanlder(user.id)}>
            Click to update
          </button>
        </div>
      ))}
    </div>
  );
};

export default Local;
