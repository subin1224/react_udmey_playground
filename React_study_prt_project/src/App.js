import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const addUserInfo = (userName, userAge) => {
    setUserInfo((prev) => {
      return [
        ...prev,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserInfo} />
      <UsersList userInfo={userInfo} />
    </div>
  );
}

export default App;
