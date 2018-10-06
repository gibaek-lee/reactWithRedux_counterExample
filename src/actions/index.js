/* Declare action creators
Action creators make action object.
Action creators에도 export를 붙여 component container에서 store에 dispatch 할 때 사용하도록 한다.
*/

import * as types from './ActionTypes'

export const create = (color) => ({
  type: types.CREAT,
  color: color
});

export const remove = () => ({
  type: types.REMOVE
});

/* 이하 action creator들의 index는 multi Counter program으로 확장할 때
특정 Counter를 지정해서 action을 수행하도록 하기 위함 */
export const increment = (index) => ({//단순히 1 더하는거라 number는 지정하지 않음
  type: types.INCREMENT,
  index: index
});

export const decrement = (index) => ({//단순히 1 빼는거라 number는 지정하지 않음
  type: types.DECREMENT,
  index: index
});

export const setColor = ({index, color}) => ({
  type: types.SET_COLOR,
  index: index,
  color: color
});
