import {useState} from "react";

function Avaleht() {

const tegelased=[
    {nimi:"Mickey",pere:"Mouse",elu:"Disneyland"},
    {nimi:"Minney",pere:"Mouse",elu:"Disneyland"},
    {nimi:"Winnie",pere:"Pooh",elu:"Woods"},
    {nimi:"Roo",pere:"Kangaroo",elu:"Hundred Acre Wood"},
]; 

const [klikitudNimi, uuendaKlikitudNimi] = useState("");

const kuvaNimi = (tegelane) => {
    // console.log(tegelane.eesnimi);
    uuendaKlikitudNimi(tegelane.nimi);
}


return (
<div>
    {klikitudNimi !=="" && <div>Klikitud tegelane on: {klikitudNimi} </div>}
{tegelased.map(tegelane =>
    <div>
        <div>{tegelane.nimi}</div>
        <div>{tegelane.pere}</div>
        <div>{tegelane.elu}</div>
        <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
    </div>)}
  </div>);
}

export default Avaleht