import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({index, number, color, onIncrement, onDecrement, onSetColor}) => {//{ }는 전달받을 props들
  return (
    <div
      className="Counter"
      onClick={() => onIncrement(index)}//전달해야 할 것은 함수이지 함수호출이 아니다. 참조(누구든지 하는 리액트4편: props와 state): https://velopert.com/3629
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement(index);
        }
      }
      onDoubleClick={() => onSetColor(index)}//전달해야 할 것은 함수! 함수호출이 아님
      style={{backgroundColor: color}}>
      {number}
    </div>
  );
};
Counter.propTypes = {//컴포넌트로 전달되는 props의 type 정의
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
Counter.defaultProps = {//props가 넘어오지 않을 시를 대비한 initialize
  index: 0,//props가 안넘어올 때 모든 counter의 index가 0으로 동일해지면 무조건 에러를 호출해야 한다.
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;
