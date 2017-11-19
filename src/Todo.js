import React, { Component, type Node } from 'react';

type FiltersProps = {
  children?: Node
};
type DisplayProps = {
  display: string
};
type TodoProps = {};
type TodoState = {
  data: [],
  completed: boolean,
  display: string
};

function Filters(props: FiltersProps) {
  return (
    <div>Filtres: {props.children}</div>
  );
}

class Todo extends Component<TodoProps, TodoState> {

  constructor(props: TodoProps) {
    super(props);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
    this.state = {
      data: [],
      completed: false,
      display: 'all',
    };
  }

  loadData() {
    fetch("data/data.json")
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          data: data.todos
        });
      });
  }

  componentDidMount() {
    this.loadData();
  }

  onLiClick = (index, event: SyntheticEvent<HTMLButtonElement>) => {
    let newData = this.state.data;
    const currentState = newData[index].complete;

    newData[index].complete = !currentState;
    this.setState({ data: newData });
  };

  addTask = (t) => {
    let tasks = this.state.data;
    const newItem = { label: t.name, complete: false };

    tasks.push(newItem);
    this.setState({ data: tasks });
  };

  onButtonAddClick = () => {
    this.addTask({name: this.taskName.value});
    this.taskName.value = '';
    return false;
  };

  setFilter = (filter: DisplayProps, event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      display: filter
    });
  };


  render() {
    const items = this.state.data
      .filter((item) => item.complete === this.state.display || this.state.display === 'all')
      .map((item, index) => {
        return (
          <li
            key={index}
            onClick={this.onLiClick.bind(this, index)}
            className={item.complete ? 'completed': null}
          >
            {item.label}
          </li>
        );
      });
    return (
      <div>
        <input type="text" ref={(input) => { this.taskName = input; }} />
        <button onClick={this.onButtonAddClick}>Ajouter</button>
        <ul>{items}</ul>
        <Filters>
          <button onClick={this.setFilter.bind(this, 'all')}>Tous</button>
          <button onClick={this.setFilter.bind(this, true)}>Terminé</button>
          <button onClick={this.setFilter.bind(this, false)}>A faire</button>
        </Filters>
      </div>
    );
  }
}

export default Todo;