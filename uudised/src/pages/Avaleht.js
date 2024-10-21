import{useState, useEffect} from "react";
import{Link} from "react-router-dom";

function Avaleht() {
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json ())
            .then(data => uuendaPostitused (data))
    }, []);

    return (
    <div>
        <div>Avaleht on see!</div>
        <img className="home" src="https://cdn.pixabay.com/photo/2016/02/08/11/24/homepage-1186348_1280.jpg" alt="Kodu" />
        {postitused.map(element => 
        <div>
            <div><i>{element.userId}</i></div> 
            <div><u>{element.id}</u></div> 
            <div><b>{element.title}</b></div> 
            <div>{element.body}</div> 

            <Link to={"kasutaja-postitus/" + element.userId}>
                <button>Kõik kasutaja postitused</button>
            </Link>
            <Link to={"vaata-postitus/" + element.id}>
                <button>Kõik kasutaja postitused</button>
            </Link>

        </div>
    )}
    </div>);
}

export default Avaleht;