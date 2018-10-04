/* reducer 정의
action의 type에 따라 변화를 일으키는 함수
state와 action을 parameter로 가짐
switch 문법을 통해 action.type에 따라 상태변화를 정의함
state 직접 수정하면 안됨. 기존 state를 덮어쓰는 새 상태객체를 만들어야 함
*/

import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;
