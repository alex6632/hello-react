// @flow

import React, { Component, type Node } from 'react';
import Clock from './Clock';
import Todo from './Todo';
import './App.css';

// Supprimer le ? si on ne veut pas qu'il soit required
type HelloProps = {
  name? : string
};

type CounterProps = {
  value? : number,
  children? : Node
};

function Counter(props: CounterProps) {
  return (
    <div>counted : {props.value} {props.children} </div>
  );
}

type AppState = {
  count: number
};


class App extends Component<{}, AppState> {
  constructor() {
    super(); //appelle la fonction constructor de Component
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      count: 0
    }
  }
  //event: SyntheticEvent<HTMLButtonElement> : supprimer si pas besoin de récupérer l'évenement
  onButtonClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        {/*<Hello name="Alexandre" />*/}
        {/*<Hello value={this.state.count} />*/}
        <Counter value={this.state.count}>
          <button onClick={this.onButtonClick}>Click</button>
        </Counter>
        <Clock />
        <Todo />
      </div>
    );
  }
}

export default App;