import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [vastus, muudaVastus] = useState(0);
  const input1Ref = useRef();
  const input2Ref = useRef();

  function korruta(){
    muudaVastus(input1Ref.current.value * input2Ref.current.value);
  }
  function lahuta(){
    muudaVastus(input1Ref.current.value - input2Ref.current.value);
  }
  function liida(){
    muudaVastus(+input1Ref.current.value + +input2Ref.current.value);
  }
  function jaga(){
    muudaVastus(input1Ref.current.value / input2Ref.current.value);
  }

  return (
    <div className="App">
      <input ref = {input1Ref} type="text" />
      <input ref = {input2Ref} type="text" />
      
      <br />
      <button onClick={korruta}>*</button>
      <button onClick={lahuta}>-</button>
      <button onClick={liida}>+</button>
      <button onClick={jaga}>/</button>
      <br />
      {vastus}
    </div>
  );
}

export default App;
