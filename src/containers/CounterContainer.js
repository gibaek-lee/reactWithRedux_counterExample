//mono counter에서만 쓰이는 component

import Counter from '../components/Counter';
import * as actions from '../actions';
import { getRandomColor } from '../utils';
import { connect } from 'react-redux';//connect는 container component를 store에 연결하기 위해 사용하는 함수

// state value of store is connected to props
const mapStateToProps = (state) => ({
  color: state.colorData.color,
  number: state.numberData.number
});

//dispatch(createdActionObj) is connected to props
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

//Redux without React에서 store에 dispatch해서 정보변화를 알리고 lilstener 서비스를 subscribe 신청하는 과정이다.
const CounterContainer = connect(//connect: container component를 store에 연결하는 함수
  mapStateToProps, mapDispatchToProps
)(Counter);//redux store에 presentational component(Counter)를 연결한 CounterContainer component를 반환

export default CounterContainer;
