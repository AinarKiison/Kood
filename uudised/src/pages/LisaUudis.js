import {useRef, useState } from 'react'

function LisaUudis() {
    const uudiseRef = useRef();
    const [s6num, uuendaS6num] = useState("TESTING")

    const lisaUusUudis = ()=>{
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }

    const kontrolli=()=>{
        uuendaS6num("");

        if(uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()){
            uuendaS6num("Väike algustäht! Paranda!")
        }

        if(uudiseRef.current.value.includes("  ")){
            uuendaS6num("Sisestasid 2 tühikut,paranda!")
        }
    }

  return (
    <div>
        <div>{s6num}</div>
        <label>Uudise nimi</label>
        <input onChange={kontrolli} ref={uudiseRef} type="text" />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  );
}

export default LisaUudis;