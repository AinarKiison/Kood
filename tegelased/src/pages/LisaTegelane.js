import {useRef, useState} from "react";

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");  
  const nimiRef = useRef();

  const lisaUustegelane = () => {
    if (nimiRef.current.value === ""){
      uuendaSonum("Tühja nimega ei sa sisestada");
    }else{
      uuendaSonum("Tegelane lisatud");
    }

  }

  return (
  <div>
    <div>{sonum}</div>
      <label>Tegelase nimi</label><br></br>
      <input ref={nimiRef} type="text"></input><br></br>
      <button onClick={lisaUustegelane}>Lisa uus</button><br></br>
    </div>);  
}

export default LisaTegelane;