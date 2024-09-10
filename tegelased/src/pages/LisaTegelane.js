import {useState} from "react";

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");  

  return (
  <div>
  <div>{sonum}</div>
    <label>Tegelase nimi</label><br></br>
    <input type="text"></input><br></br>
    <button onClick={()=> uuendaSonum("Tegelane lisatud!")}>Lisa uus</button><br></br>
  </div>);  
}

export default LisaTegelane;