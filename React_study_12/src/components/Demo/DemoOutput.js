import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");

  // props 가 바뀌어서 해당 컴포넌트 평가가 이뤄지는 것이 아닌 부모 컴포넌트에서 특성이 바뀌어도 재평가 한다.
  // => toggleParagraphHandler
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// React.memo
/*
인자로 들어간 컴포넌트에 어떤 props 가 입력되는지 확인하고 
입력되는 모든 props의 신규 값을 확인한 뒤 이를 기존의 props의 값과 비교하도록 리액트에게 전달
props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가

-> 최적하에는 비용이 따르기 때문에 모든 컴포넌트에 하지 않는다.
기존의 props값 저장 할 공간 필요, 비교할 작업도 필요. => 이런 성능화 작업은 어떤 컴포넌트에 쓰이는지에 따라 성능이 달라짐
ex. 컴포넌트 트리가 매우 큰 경우에 유용하게 사용 or 컴포넌트 트리의 상위에 있다면 유용하게 사용
*/
export default React.memo(DemoOutput);
