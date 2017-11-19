import React, { Component } from "react";

import TaskList from "./TaskList";
import Header from "./Header";
import Footer from "./Footer";

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <Header onAdd={this.props.addItem} />
        <TaskList
        tasks={this.props.tasks}
        filter={this.props.filter}
        onSelectItem={this.props.onToggleItem}
        />
        <Footer
          onSelectFilter={this.props.updateFilter}
          selected={this.props.filter}
        />
      </div>
    );
  }
}
