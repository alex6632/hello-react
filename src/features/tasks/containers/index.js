import { connect } from "react-redux";
import Component from "../components";

function mapDispatchToProps(dispatch) {
  return {
    onToggleItem: index => {
      dispatch({ type: "TOGGLE_TASK", index });
    },
    addItem: label => {
      dispatch({ type: "ADD_TASK", label });
    },
    updateFilter: filter => {
      dispatch({ type: "SET_FILTER", filter });
    }
  };
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    filter: state.tasksFilter
  };
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default TasksContainer;