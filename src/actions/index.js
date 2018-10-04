/* Declare action creators
Action creators make action object.
Action creators에도 export를 붙여 component container에서 store에 dispatch 할 때 사용하도록 한다.
*/

import * as types from './ActionTypes'

export const increment = () => ({//단순히 1만 더하는거라서 type만 지정
  type: types.INCREMENT
});

export const decrement = () => ({//단순히 1만 더하는거라서 type만 지정
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color: color
});
