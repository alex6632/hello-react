const initialState = [
  { id: 1, label: "Learn Javascript", complete: true },
  { id: 2, label: "Learn ES6", complete: true },
  { id: 3, label: "Learn React", complete: false },
  { id: 4, label: "Learn React Native", complete: false },
  { id: 5, label: "Learn Nodejs", complete: false },
  { id: 6, label: "Learn by doing", complete: false },
  { id: 7, label: "Learn to teach", complete: false },
  { id: 8, label: "Teach to learn", complete: false } ];


function tasks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      const copyState = [...state];
      copyState.unshift({
        label: action.label,
        complete: false,
        id: copyState.length
      });
      return copyState;
    case "TOGGLE_TASK":
      const newState = state.concat(); // equal-to [...state]
      newState[action.index].complete = !newState[action.index].complete;
      return newState;
    default:
      return state;
  }
}

export default tasks;