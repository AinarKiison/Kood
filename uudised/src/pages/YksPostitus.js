import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from "react";

function YksPostitus() {
    const{postituseId} = useParams();
    const [postitus, uuendaPostitus] = useState({});

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts/" + postituseId)
            .then(res=> res.json())
            .then(data => uuendaPostitus(data))
    }, [postituseId]);

  return (
    <div>
        <div><i>{postitus.userId}</i></div>
        <div><u>{postitus.userId}</u></div>
        <div><b>{postitus.userId}</b></div>
        <div>{postitus.userId}</div>
    </div>
  );
}

export default YksPostitus