import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

/*
toggleParagraphHandler 함수는 재 생성 되므로 React.memo() 로 감싸주어도 해당 컴포넌트는 계속 재평가가 된다.

배열이나 객체 함수 
[1, 2, 3] === 1, 2, 3] => false
함수는 하나의 객체에 불과.
App 함수가 실행될 떄 마다 새로운 함새 객체가 생성이 되고 그 함수 객체가 onClick props에 전달이 된다.
예를 들어 props.onClick === props.previous.onClick 은 false가 나온다 .

값이 변경되었다고 받아들이기 때문에 해당 컴포넌트는 계속 재평가 재실행이 된다. -- 중요 !!
*/
export default React.memo(Button);
