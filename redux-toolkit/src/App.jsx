import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, amountbyMultiply } from "./redux/counterSlice";
import { useGetQuery } from "./redux/apiSlice";

export default function App() {
  const { data, isFetching, error, isLoading, refetch } = useGetQuery({ url: '/comments' });

  console.log("error", error, "isFetch", isFetching, "isloading", isLoading, "refetch", refetch);

  const { value } = useSelector((state) => state.counter)
  // console.log(data, "value");
  const dispatch = useDispatch();

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App</h1>
      <h1 style={{ textAlign: "center" }}>{value}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(amountbyMultiply())}>amountbyMultiply</button>
    </div>
  )
}