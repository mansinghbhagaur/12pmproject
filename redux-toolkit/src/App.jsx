import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, amountbyMultiply } from "./redux/counterSlice";

export default function App() {
  const data = {
    name: 'hello'
  }
  const { value } = useSelector((state) => state.counter)
  console.log(value, "value");
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App</h1>
      <h1 style={{ textAlign: "center" }}>{value}</h1>
      <button onClick={() => dispatch(increment(data))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(amountbyMultiply())}>amountbyMultiply</button>
    </div>
  )
}