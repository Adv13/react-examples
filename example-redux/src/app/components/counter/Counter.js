import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <button type="button" className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
        <br />
        <span >{count}</span>
        <br />
        <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}
