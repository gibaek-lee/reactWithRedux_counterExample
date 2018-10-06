//multi counter reducer
import * as types from '../actions/ActionTypes'

const initialState = {
  counters: [ //multi counter 각각의 state 관리를 위해 상태 객체{ }들의 배열[ ]을 만든다.
      {
        color: 'black',
        number: 0
      }
  ]
}

//reducer define
function counter(state = initialState, action) {
  const { counters } = state; //state.counters 배열을 counters로 줄여서 사용하기 위해 정의

  switch (action.type) {
    case types.CREAT:
      return {
        counters: [ //counters 배열에 새로 생성된 counter의 객체가 추가된다.
          ...counters, //counters 배열을 spread(...)하면 기존 생성되있던 counter들의 state 객체들이 나온다.
          { //새로 생성된 counter의 state 객체
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE: //맨 마지막 카운터의 state를 제외시킨다.
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    case types.INCREMENT:
      return { //slice는 새로운 배열을 return
        counters: [ // 액션 취할 state 앞 뒤로 객체들을 펼치고, action 취하고, 다시 합쳐 배열로 만든다.
          ...counters.slice(0, action.index), //increment action을 취하는 객체 이전까지의 객체들 spread
          {
            ...counters[action.index], //counters[index] 객체를 spread(...)하면 key-value pair가 나온다.
            number: counters[action.index].number + 1 //number key-value pair가 counters[index] 객체에 있으면 number를 +1해서 덮어쓴다.
          },
          ...counters.slice(action.index + 1, counters.length) //increment action을 취하는 객체 이후의 객체들 spread
        ]
      };
    case types.DECREMENT: //increament action과 완전히 동일한 구조
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR: //increament action과 완전히 동일한 구조
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
          color: action.color //color를 action으로 받은 값으로 재지정하고 counters[index]의 color key-value pair를 덮어쓴다.
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state; //reducer의 기본은 state와 action을 받아서 action을 하고 변한 state를 반환하는 것이다.
  }
}

export default counter
