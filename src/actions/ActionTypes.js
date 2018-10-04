/* Declare action types
const 변수에 export를 붙이면 다른 파일에서 import * as types from './ActionTypes' 와 같이 쓸 수 있다.
action creator와 reduce에서 이를 사용한다.
*/
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
