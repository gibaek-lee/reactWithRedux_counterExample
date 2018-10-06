import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import { getRandomColor } from '../utils';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props; //아래 mapDispatchToProps에서 정의하고 export connect(mapProps)(App) 한것이 App의 props로 전달됨
    return (
      <div className="App">
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        {/*<Counter> //redux store 만들기 전*/}
        {/*<CounterContainer />*/}
        <CounterListContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App)
