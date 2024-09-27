import {useState} from "react";

function Tagasiside() {
  const [tagasisided, määraTagasisided] = useState(["Oli hea","Huvitav","Teistsugune","Põnev"])  

function kustuta(index){
  tagasisided.splice(index,1);
  määraTagasisided(tagasisided.slice());
}


return  (
<div>Tagasisided:
  {tagasisided.map((element, index) =>
  <div>
    <span> {element} </span>
    <button onClick={() => kustuta(index)}>X</button>
  </div>)}
</div>)
}

export default Tagasiside;