import {useState} from "react";

function Kontakt() {
    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);
    return (
         <div>
           <div>See on kontaktide leht</div> 
           <div>Võta meiega ühendust</div>
           <br/>    
           <div onClick={()=> muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
           {n2itaTelKristiine && <div>+37255555</div>}
           <div>Endla tn</div>
           <br></br>
           <div onClick={()=> muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
           {n2itaTelYlemiste && <div>+37255555</div>}
           <div>Endla tn</div>
           <br></br>
           <div onClick={()=> muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
           {n2itaTelTasku && <div>+37255555</div>}
           <div>Endla tn</div>
           <br></br>
         
         </div> );
}

export default Kontakt;