import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainComponent from './MainComponent';

const initialState = { score: 5 };

function myReducer(state = initialState, action) {
  switch(action.type){
    case 'INCREASE_SCORE_BY_ONE':
      return {score: state.score + 1}

    case 'INCREASE_SCORE_BY_TWO':
      return { score: state.score + 2};

    case 'INCREASE_SCORE_BY_THREE':
      return { score: state.score + 3};

    case 'INCREASE_SCORE_BY_FOUR':
      return { score: state.score + 4};

    case 'INCREASE_SCORE_BY_SIX':
      return { score: state.score + 6};

    default:
      return state;
  }
}

const myStore = createStore(myReducer);
class App extends Component {
  render() {
    return (
      <Provider store={ myStore }>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
