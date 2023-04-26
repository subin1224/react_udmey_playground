import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const changeUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const clickAddUserHandler = () => {
    if (!userName || !userAge) {
      return;
    }
    props.userInfo(userName, userAge);
  };

  return (
    <Card className={styles.input}>
      <label>Username</label>
      <input type="text" value={userName} onChange={changeUserName} />
      <label>Age (Years)</label>
      <input type="text" value={userAge} onChange={changeUserAge} />
      <Button onClick={clickAddUserHandler}>Add User</Button>
    </Card>
  );
};

export default AddUser;
