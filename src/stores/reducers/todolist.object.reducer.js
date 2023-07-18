const initialState = {
  todos: [
    { taskName: "sss", status: true },
    { taskName: "ttt", status: false },
  ],
};

const todoListObjectReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDTODO_TASK":
      return { ...state, todos: [...state.todos, { ...payload }] };
    case "REMOVETODO_TASK":
      var temp = [...state.todos];
      const arr = temp.filter(function (el) {
        return el.taskName !== payload.taskName;
      });
      return { ...state, todos: [...arr] };
    default:
      return state;
  }
};
export default todoListObjectReducer;
