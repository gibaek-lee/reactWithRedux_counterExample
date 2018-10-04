import React, { Component } from 'react';
//import Counter from '../components/Counter';
import CounterContainer from './CounterContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/*<Counter> //redux store 만들기 전*/}
        <CounterContainer />
      </div>
    );
  }
}

export default App;
