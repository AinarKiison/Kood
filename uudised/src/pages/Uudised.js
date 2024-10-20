import{Link} from "react-router-dom";

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return ( 
      <div>     
        {uudised.length === 0 && <div>No news</div> }
        <div>{uudised.map((uudis, index)=>

         <Link to={"/uudis/"+index}><div>{uudis}</div></Link>

          )}</div>
      </div>
 );
}

export default Uudised;