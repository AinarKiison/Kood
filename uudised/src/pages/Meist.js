import{useState} from "react";

function Meist() {
    const[kontakt, n2itaKontakt] = useState("");
    const tootajad = [
      {nimi:"Einar Kristjanson",ala:"Disainer",telefon:"+372 555 666"},
      {nimi:"Aimar Kristjanson",ala:"Disainer",telefon:"+372 555 666"},
      {nimi:"Aivar Kristjanson",ala:"Disainer",telefon:"+372 555 666"},
  ]
    const[valitud, uuendaValitud] = useState("");

    const v6taYhendust = (tootaja) => {
      n2itaKontakt(tootaja.telefon);
      uuendaValitud(tootaja.nimi);
    }


    return ( 
      <div>
        <br />
        <div>Meie töötajad:</div>
        <br />
        <div>{tootajad.map(tootaja =>
          <div className="valitud">
              <div>{tootaja.nimi}</div>
              <div>{tootaja.ala}</div>
              <button onClick={()=> v6taYhendust(tootaja)}>Võta ühendust</button>
         <br /><br />
          </div>)}
      </div>
    
      VALITUD INIMENE: {valitud}
      { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>);
}

export default Meist;