import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator/calculatorSlice';
import classes from './Counter.module.css';

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result)
  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch(calculatorActions.addCount(5))
  }

  const divideHandler = () => {
    dispatch(calculatorActions.divide(4))
  }

  const subtractHandler = () => {
    dispatch(calculatorActions.substract(10))
  }

  const multiplyHandler = () => {
    dispatch(calculatorActions.multiply(2))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator; 
