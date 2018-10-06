/* Declare action types
const 변수에 export를 붙이면 다른 파일에서 import * as types from './ActionTypes' 와 같이 쓸 수 있다.
action creator와 reduce에서 이를 사용한다.
*/
export const CREAT = 'CREAT';//Counter 추가
export const REMOVE = 'REMOVE';//Counter 제거

export const INCREMENT = 'INCREMENT';//숫자 증가
export const DECREMENT = 'DECREMENT';//숫자 감소
export const SET_COLOR = 'SET_COLOR';//더블 클릭하면 색이 변함
