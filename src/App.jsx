import { useEffect, useState } from 'react'
import './App.css'
import Child from './components/Child';

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);
  const [state5, setState5] = useState(0);
  const [state6, setState6] = useState(0);
  const [state7, setState7] = useState(0);
  const [state8, setState8] = useState(0);

  useEffect(_ => {
    console.log('Testing App');
  }, []);

  const handleSetState1 = _ => {
    setState1(state1 + 1);
  }

  const handleSetState2 = _ => {
    setState2(state2 + 1);
  }

  return (
    <>
      <button onClick={handleSetState1}>Add state 1</button>
      <button onClick={handleSetState2}>Add state 2</button>

      <Child state1={state1} state2={state2}>

      </Child>
    </>
  )
}

export default App
