import {useParams }from 'react-router-dom';
import{useRef} from "react";

function MuudaUudis() {
    const{ index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];
    const uudisRef = useRef();

    const muuda=()=>{
        uudisedLS[index] = uudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudisedLS));
    }

  return (
    <div>
        <label >Uuudis</label><br />
        <input ref={uudisRef} type="text" defaultValue={leitudUudis}/><br />
        <button onClick={muuda}>Muuda</button>
    </div>
  );
}

export default MuudaUudis;