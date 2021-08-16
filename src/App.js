import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


export default function App() {
  const storage = useSelector(state => state.data);
  const dispatch = useDispatch();

  const incrementData = () => ({
    type: 'increment'
  });
  const decrement = () => ({
    type: 'decrement'
  });

  return (
    <>
     
    </>
  );
}
