/* reducer 정의
action의 type에 따라 변화를 일으키는 함수
state와 action을 parameter로 가짐
switch 문법을 통해 action.type에 따라 상태변화를 정의함
state 직접 수정하면 안됨. 기존 state를 덮어쓰는 새 상태객체를 만들어야 함
*/

import * as types from '../actions/ActionTypes'

const initialState = {//최초 변화를 일으키기 전 초기상태가 필요함
  color: 'black',
  number: 0
};

function counter(state = initialState, action){
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default counter;
