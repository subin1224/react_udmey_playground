import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// createRoot - Main Entry point
// index.html 에서 보았던 div Id 'root' 확인 - 렌더링 될 주된 위치 확인

// JSX 구문
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
