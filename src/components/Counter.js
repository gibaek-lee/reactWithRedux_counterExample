import React from 'react'
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {//{ }는 전달받을 props들
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement();
        }
      }
      onDoubleClick={onSetColor}
      style={{backgroundColor: color}}>
      {number}
    </div>
  );
};
Counter.propTypes = {//컴포넌트로 전달되는 props의 type 정의
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
Counter.defaultProps = {//props가 넘어오지 않을 시를 대비한 initialize
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;
