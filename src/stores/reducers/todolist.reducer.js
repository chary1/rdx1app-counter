const initialState = {
  todos: ["clearbill", "cleaning", "mokshetoy"],
  newtodo: "",
};

const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDTODO":
      return { ...state, todos: [...state.todos, state.newtodo] };
    case "UPDATETODO":
      return { ...state, newtodo: payload };
    case "DELETETODO":
      var temp = [...state.todos];
      temp.splice(payload, 1);
      return { ...state, todos: [...temp] };
    default:
      return state;
  }
};

export default todoListReducer;
