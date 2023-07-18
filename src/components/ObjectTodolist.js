import React from "react";
import { connect } from "react-redux";

function ObjectTodolist(props) {
  const [task, setTask] = React.useState("");
  console.log(props.todosObj.todos);

  const addTodoTask = () => {
    // console.log(task);
    const taskobj = { taskName: task, status: false };
    props.dispatch({ type: "ADDTODO_TASK", payload: taskobj });
  };

  const removeTodoTask = (task) => {
    // console.log(task);
    props.dispatch({ type: "REMOVETODO_TASK", payload: task });
  };

  return (
    <div>
      <h3>Object json object</h3>
      Name:
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodoTask}>Button</button>
      {props.todosObj.todos &&
        props.todosObj.todos.map((todo, i) => {
          return (
            <>
              <li key={i}>
                {todo.taskName}
                <button onClick={() => removeTodoTask(todo)} className="mx-2">
                  Remove
                </button>
              </li>
            </>
          );
        })}
    </div>
  );
}

export default connect((store) => store)(ObjectTodolist);
