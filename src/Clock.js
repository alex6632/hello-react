// @flow

import React, { Component } from 'react';

type ClockProps = {};
type ClockState = {
  date: Date
};

class Clock extends React.Component<ClockProps, ClockState> {
  timer: number;
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }


  componentWillMount() {
    this.timer = setInterval(() => {
      this.updateTimer()
    }, 1000);
  }

  updateTimer() {
    this.setState({
      date: new Date()
    });
  }

  shouldComponentUpdate(nextProps: ClockProps, nextState: ClockState){
    //console.log("shouldComponentUpdate", nextState.date.toLocaleTimeString());
    return true;
  }
  componentWillUpdate(nextProps: ClockProps, nextState: ClockState){
    //console.log("componentWillUpdate ", nextState.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;