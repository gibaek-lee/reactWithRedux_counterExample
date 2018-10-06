import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//Redux 관련 import
import { createStore } from 'redux';
import reducers from './reducers';//reducer 정의된 폴더
import { Provider } from 'react-redux';//Provider는 react App에 Store를 쉽게 연동할 수 있게 해주는 컴포넌트

//create store(redux dev tool 사용을 위해 window parameter 2개를 createStore에 넘겨줘야 한다)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Provider로 react App에 store 연동
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
