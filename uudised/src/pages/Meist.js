import{useState} from "react";

function Meist() {
    const[kontakt, n2itaKontakt] = useState("");

    return ( 
      <div>

      <div>See on Meist leht</div> 
      <div>Meie töötajad</div>
      <br/>    
      <div>Ainar Kiison</div>
      <div>Disainer</div>
      <button onClick={()=> n2itaKontakt("+372555555")}>Võta ühendust</button>
      <br></br>
      <br></br>
      <div>Ainar Kiison</div>
      <div>Arendaja</div>
      <button onClick={()=> n2itaKontakt("+372666666")}>Võta ühendust</button>
      <br></br>
      <br></br>
      <div>Ainar Kiison</div>
      <div>Kasutajaliides</div>
      <button onClick={()=> n2itaKontakt("+372777777")}>Võta ühendust</button>
      <br></br>
      <br></br>
      { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    
    </div>  
     );
}

export default Meist;