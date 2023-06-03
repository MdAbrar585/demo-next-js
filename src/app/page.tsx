'use client';

import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement, incrementByAmmount } from "@/GlobalRedux/Features/counter/counterSlice";

export default function Home() {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="flex flex-col m-10">
      <button 
        className="rounded-full bg-teal-500 p-5"
        onClick={() => dispatch(increment())}
      >Increment</button>
      <span className="text-center">{count}</span>
      <button 
        className="rounded-full bg-teal-500 p-5 mt-2"
        onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button 
        className="rounded-full bg-teal-500 p-5 mt-2"
        onClick={() => dispatch(incrementByAmmount(2))}
      >Increment by 2</button>
    </main>
  )
}
