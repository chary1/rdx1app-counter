import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>Thank you god</h1>
      <h3>{props.count.count}</h3>
      <button
        className="mx-2"
        onClick={() => props.dispatch({ type: "INCREMENT" })}
      >
        INCREMENT
      </button>
      <button
        className="mx-2"
        onClick={() => props.dispatch({ type: "DECREMENT" })}
      >
        DECREMENT
      </button>

      <button
        className="mx-2"
        onClick={() => props.dispatch({ type: "RESET" })}
      >
        RESET
      </button>
    </div>
  );
}

export default connect(function (store) {
  return store;
})(Counter);
