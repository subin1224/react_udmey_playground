import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    // 어느 클래스 컴포넌트에도 추가 가능
    // 컴포넌트에 이를 추가하게 되면 클래스 컴포넌트를 오류 경계를 갖게 된다.
    // 오류 경계란 단어는 이런 생명 주기 메소드 (componentDidCatch) 를 갖는
    // 컴포넌트를 칭한다.
    // 함수형 컴포넌트에서는 안되므로 이 오류 경계를 빌드하려면 클래스 컴포넌트여야 하고
    // 동시에 생명 주기 메소드를 갖는 컴포넌트여야 한다.
    // 이 생명주기메소드는 하위 컴포넌트 중 하나가 오류를 만들거나 전달할 때 발동한다.

    // 각 오류마다 개별 오류 경계가 필요하다는 점을 기억하자.
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    // 이 오류 경계 컴포넌트를 우리가 보호하려는 컴포넌트로 둘러싸야 한다.
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.childern;
  }
}

export default ErrorBoundary;
