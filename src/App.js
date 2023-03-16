import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import "./App.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
         10'ar 10'ar Arttır
      </button>
    </div>
  );
}
