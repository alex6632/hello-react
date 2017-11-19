import React from "react";
import TaskItem from "./TaskItem";

const TaskList = props => {
  return props.tasks.map((item, index) => {
    if (item.complete && props.filter === "new") return null;
    if (!item.complete && props.filter === "complete") return null;
    return (
      <TaskItem
        label={item.label}
        visited={item.complete}
        key={item.id}
        onPress={props.onSelectItem.bind(this, index)}
      />
    );
  });
};
export default TaskList;
