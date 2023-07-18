import React from "react";
import { connect } from "react-redux";

function ArrayTodolist(props) {
  const [task, setTask] = React.useState("");
  const addTask = () => {
    // console.log(task);
    props.dispatch({ type: "ADD_TODO", payload: task });
  };

  const removeTask = (index) => {
    // console.log(task);
    props.dispatch({ type: "REMOVE_TODO", payload: index });
  };

  return (
    <div>
      <h1>
        count: {props.todosArray.todos ? props.todosArray.todos.length : 0}
      </h1>
      {/** Add Data */}
      <h1>input onchange</h1>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>ADD</button>
      {/** List Data */}
      {props.todosArray.todos &&
        props.todosArray.todos.map((todo, i) => {
          return (
            <>
              <li key={i}>
                {todo}
                <button onClick={() => removeTask(i)} className="mx-2">
                  Remove
                </button>
              </li>
            </>
          );
        })}
    </div>
  );
}

export default connect(function (store) {
  return store;
})(ArrayTodolist);
