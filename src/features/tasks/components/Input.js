import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      text: undefined
    };
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.state.text);
    this.setState({
      text: undefined
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.taskName = input; }}
          placeholder="Enter a task"
          value={this.state.text}
          onChange={text => this.setState({ text })}
        />
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}
