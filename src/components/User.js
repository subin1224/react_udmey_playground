import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // 샘영 주기 메소드
  componentWillUnmount() {
    console.log("User will unmount"); // 3번 출력
  }

  // render 주요 메소드: 리액트가 jsx 코드 안에 컴포넌트가 사용된 것을 확인하면
  // 그때 호출 하는 메소드. 리액트가 해당 메소드를 호출하고 무엇이 화면에 렌더링 되어야하는지 찾는다.
  // 따라서 render 메소드는 함수형 컴포넌트에서 jsx코드를 return 하는 의미와 동일하다.

  // render 메소드는 props를 받지 않는다. 따라서 리액트에서 컴포넌트를 import 한다.
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
