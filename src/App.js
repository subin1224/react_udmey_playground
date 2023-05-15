import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // 첫 렌더링 때 실행 & 버튼을 누르면 실행
  // 실제 DOM을 통한 업데이트는 가상 스냅샷 간의 차이점만 반영함.
  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
