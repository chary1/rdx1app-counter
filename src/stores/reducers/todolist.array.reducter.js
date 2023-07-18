const initialState = {
  todos: ["read", "workout", "running"],
};

const todolistArrayReducter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, payload] };
    case "REMOVE_TODO":
      var temp = [...state.todos];
      temp.splice(payload, 1);
      return { ...state, todos: [...temp] };
    default:
      return state;
  }
};

export default todolistArrayReducter;
