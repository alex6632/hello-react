function tasksFilter(state = 'all', action) {
  if (action.type === 'SET_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

export default tasksFilter;