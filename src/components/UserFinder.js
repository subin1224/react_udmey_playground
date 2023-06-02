import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // 정적 프로퍼티로 단 하나만 연결 가능. 두개 이상은 다른 방법 (다른 컴포넌트 래핑 등..)
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [], // 예시 componentDidMount
      searchTerm: "",
    };
  }

  // 생명 주기 메소드
  componentDidMount() {
    // 예시이자 가정..
    // Send http Request....
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  // 생명 주기 메소드
  componentDidUpdate(prevProps, prevState) {
    // 무한루프 발생 방지
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        {/* <UsersContext.Consumer>
            // context 이용하기 (1)
            // 함수형 및 클래스 컴포넌트에 사용 가능
        </UsersContext.Consumer> */}
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

// // componentDidMount와 같은 역할 - 의존성 없이 useEffect 호출
// // 설령 의존성이 있더라도 실행 시점은 컴포넌트가 처음 마운트 되는 시점

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
