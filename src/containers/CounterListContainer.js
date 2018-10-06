import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { getRandomColor } from '../utils'; //선언형 함수 import할 때 { functionName }, 표현형은 중괄호 없이 functionName
import { connect } from 'react-redux';

//store state connect to props
const mapStateToProps = (state) => ({
  counters: state.counters
});

//store dispatch(createdActions) connect to props
const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({index, color}));
  }
});

//container component의 dispatch to store
//presentational component의 store에 listener 서비스 subscribe 신청 및 store의 listener 서비스 시행
const CounterListCountainer = connect(
  mapStateToProps, mapDispatchToProps
)(CounterList);

export default CounterListCountainer;
