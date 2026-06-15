import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };

    case "-":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};

function Count() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useReducer Counter</h2>

      <p>Count : {state.count}</p>

      <button onClick={() => dispatch({ type: "+" })}>
        ++
      </button>

      <button onClick={() => dispatch({ type: "-" })}>
        --
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default Count;