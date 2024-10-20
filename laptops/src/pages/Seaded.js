import {useState} from 'react';

function Seaded() {
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

    const tumeLeht =()=>{
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        muudaKujundus("dark_mode");
    }
    const heleLeht =()=>{
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        muudaKujundus("light_mode");
    }


  return (
    <div>
        <button onClick={tumeLeht}>Tume</button>
        <button onClick={heleLeht}>Hele</button>
        { kujundus === "dark_mode" && <div>Tume Leht</div>}
        { kujundus === "light_mode" && <div>Hele Leht</div>}
    </div>
  );
}

export default Seaded