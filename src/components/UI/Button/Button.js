import React from "react";

// CSS 모듈 사용하기 Button.css -> Button.module.css name Change
// 고유의 CSS 스타일과 클래스를 생성해주는 모듈
import styles from "./Button.module.css";

// className -> className대신 styles 의 Object > className (css) 이용
// 우리가 사용하는 컴포넌트의 스타일로만 국한되게 할 수 있음
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// // styled-components 패키지 이용하기
// import styled from "styled-components";

// // styled - 모든 html요소들의 메소드 가지고 있음 ex. p / h1 , h2 ...
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
