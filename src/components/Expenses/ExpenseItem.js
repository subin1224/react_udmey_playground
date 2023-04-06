import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // 리액트의 컴포넌트에는 컴포넌트 안에 반환하는 이 html파일 즉 이 jsx 코드 안에
    // 반환하는 문장 마다 또는 jsx 코드 조각 마다 반드시 한개의 루트 요소를 갖는다.

    // 가장 간단한 방법
    // * class 대신 className 을 써야 한다.

    // Event Handle - 이벤트 리스너 추가
    const clickHandler = () => {
        console.log('Clicked!!!!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price"> ${props.amount} </div>
            </div>
            <button onClick={clickHandler}> Change Title </button>
        </Card>
    );
};

export default ExpenseItem;
