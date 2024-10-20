import {useState} from "react";

function Avaleht() {

const valiTegelane = (klikitudTegelane) => {
    const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
    valitud.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitud));
}

const tegelased=[
    {nimi:"Mickey",pere:"Mouse",elu:"Disneyland", vanus: 25},
    {nimi:"Minney",pere:"Mouse",elu:"Disneyland", vanus: 25},
    {nimi:"Winnie",pere:"Pooh",elu:"Woods", vanus: 25},
    {nimi:"Roo",pere:"Kangaroo",elu:"Hundred Acre Wood", vanus: 25},
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
        <div>{tegelane.vanus}</div>
        <button onClick={() => valiTegelane(tegelane)}>Vali</button>
        <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
    </div>)}
  </div>);
}

export default Avaleht