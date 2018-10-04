import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//Redux 관련 import
import { createStore } from 'redux';
import reducers from './reducers';//reducer 정의된 폴더
import { Provider } from 'react-redux';//Provider는 react App에 Store를 쉽게 연동할 수 있게 해주는 컴포넌트

//create store
const store = createStore(reducers);

//Provider로 react App에 store 연동
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
