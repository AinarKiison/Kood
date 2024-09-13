import React, { useState } from 'react'

function Ilmumine() {
  const[n2itaLisainfot, uuendaN2itaLisainfot] = useState(false);      

  return (
    <div>
        <div onClick={()=> uuendaN2itaLisainfot(!n2itaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutuskäik
            {n2itaLisainfot === true && <span>A</span>}
            {n2itaLisainfot === false && <span>V</span>}
        </div>
            { n2itaLisainfot === true && <div> Tellitavad tooted ja teenused <br />

Lisatud teenused <br /> <br />
Family pakett <br />
<br />
     Soodustus kuni 29.03.2023 <br />
     0,00 €/kuu <br />
<br />
     39,00 €/kuu <br />
<br />
     Videolaenutus <br />
<br />
          Sisaldub paketis <br />
     FOX NOW <br />
<br />
     Sisaldub paketis <br />
     HBO <br />
<br />
     Sisaldub paketis <br />
     National Geographic keskkond <br />
<br />
     Sisaldub paketis <br />
     Go3 Film / Paramount+ <br />
<br />
     Sisaldub paketis <br />
     Lastenurk <br />
<br />
     Sisaldub paketis <br />
     Setanta Sportsi äpp <br />
<br />
     Sisaldub paketis <br />
     5 ekraani <br />
<br />
     Sisaldub paketis <br />
     Inspira + <br />
<br />
     Sisaldub paketis <br />
     Salvestamine <br />
<br />
     Sisaldub paketis <br />
        </div>}
    </div>

  )
}

export default Ilmumine