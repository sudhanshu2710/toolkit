import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // this will update the counter in this function as soon as
  //there is a change in counter in the store, ans eventually re-render this counter function again.
  //so eventually what useSelector() is doing , this is building an automatic subscription to the store for the component.
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
