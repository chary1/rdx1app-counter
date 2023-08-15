import React from "react";
import { connect } from "react-redux";
import { counterInc, counterDec, counterReset } from "../stores/actions";
function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>Thank you god</h1>
      <h3>{props.counter.count}</h3>
      <button className="mx-2" onClick={() => props.dispatch(counterInc())}>
        INCREMENT
      </button>
      <button className="mx-2" onClick={() => props.dispatch(counterDec())}>
        DECREMENT
      </button>

      <button className="mx-2" onClick={() => props.dispatch(counterReset())}>
        RESET
      </button>
    </div>
  );
}

export default connect(function (store) {
  return store;
})(Counter);
