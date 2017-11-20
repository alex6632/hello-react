import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    };
  }
  handleChange(event) {
    this.setState({text: event.target.text});
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.taskName.value);
    this.taskName.value = '';
    return false
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          //value={this.state.text}
          ref={(input) => { this.taskName = input; }}
          //onChange={text => this.setState({ text })}
          //onChange={this.handleChange}
        />
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}
