import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const addUserInfo = (userName, userAge) => {
    setUserInfo((prev) => [...prev, { name: userName, age: userAge }]);
  };

  return (
    <div>
      <AddUser userInfo={addUserInfo} />
      <UsersList userInfo={userInfo} />
    </div>
  );
}

export default App;
