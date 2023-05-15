import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // 첫 렌더링 때 실행 & 버튼을 누르면 실행
  // 실제 DOM을 통한 업데이트는 가상 스냅샷 간의 차이점만 반영함.
  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
    setShowParagraph((prev) => !prev);
   }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true); //true로 고정
  };

  // 컴포넌트가 재실행 되면 자식컴포넌트 역시 재평가(재실행) 된다.
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
