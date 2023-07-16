import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
  //console.log(props);
  return (
    <div className="border-view">
      <h2>Add Todo</h2>
      <input
        type="text"
        onKeyUp={(e) =>
          props.dispatch({ type: "UPDATETODO", payload: e.target.value })
        }
      />
      <button onClick={() => props.dispatch({ type: "ADDTODO" })}>Add</button>
      <h2>Todo List</h2>
      {props.todos.todos == ""
        ? "No data"
        : props.todos.todos &&
          props.todos.todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                <button
                  onClick={() =>
                    props.dispatch({ type: "DELETETODO", payload: i })
                  }
                >
                  Delete
                </button>
              </li>
            );
          })}
    </div>
  );
}

export default connect((store) => store)(Todolist);
