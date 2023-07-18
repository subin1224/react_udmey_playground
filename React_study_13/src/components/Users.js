import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    // 클래스에 생성자를 추가하고 다른 클래스를 extends하게 되면 super()라는 상위 클래스의 생성자를 호출하는
    // 메서드를 호출해야 한다.
    super();

    // 생성자 에서는 상태 초기화 같은 초기화 작업을 할 수 있다.
    // !!중요!! 클래스 컴포넌트에서는 상태는 항상 중요하고 객체 형태 이다.
    // 함수형 컴포넌트 에서는 불리언이나 문자열 또는 숫자와 같이 어느 형태든 될 수 있었다. (심지어 객체도))
    // 클래스 컴포넌트에서는 상태에 필요한 라이선스나 조각들을 하나의 상태 객체로 만들기 때문에 상태는 항상 객체다.
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    // try {
    //   // 실패할 수 있는 코드
    //   someCodeWhichMightFail();
    // } catch (err) {
    //   // handle error
    // }

    if (this.props.users.length === 0) {
      // 의도적으로 오류 생성
      throw new Error("No users provided!"); // 콜스택 오류 -> 앱 중단
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false // NOT!!
    // 해당 메서드 역시 항상 객체가 들어와야 하며 이 객체는 설정하려는 새로운 상태를 포함한다.
    // 기존 상태에 오버라이드 하지 않고 기존의 상태와 병합을 한다. => 두번째 상태값은 손실되지 않는 다는 뜻
    this.setState((curState) => {
      // 반환은 객체형태 여야 한다.
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
