import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const userList = props.userInfo.map((item, idx) => {
    <li key={idx}>
      {item.name} {item.age}
    </li>;
  });

  return (
    <Card className={styles.users}>
      <ul>{userList}</ul>
    </Card>
  );
};

export default UsersList;
