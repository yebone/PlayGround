import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementWithAmount,
  increment,
  incrementWithAmount,
  reset,
} from "../features/counter/counterslice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [customNumber, setCustomNumber] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center border-4">
      <h1>{value}</h1>
      <div className=" flex gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-square btn-primary w-fit p-2"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-square btn-primary w-fit p-2"
        >
          decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="btn btn-square btn-primary w-fit p-2"
        >
          reset
        </button>
      </div>
      <div>
        <div className=" flex gap-2 items-center mt-5">
          <label htmlFor="customNumber">Custom Number--</label>
          <input
            type="number"
            id="customNumber"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setCustomNumber(e.target.value)}
          />
        </div>

        <div className=" flex gap-3 mt-3">
          <button
            onClick={() => dispatch(incrementWithAmount(Number(customNumber)))}
            className="btn btn-square btn-primary w-fit p-2"
          >
            incrementWithAmount
          </button>
          <button
            onClick={() => dispatch(decrementWithAmount(Number(customNumber)))}
            className="btn btn-square btn-primary w-fit p-2"
          >
            decrementWithAmount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
