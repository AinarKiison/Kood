import {useState} from "react";
import { Link, } from 'react-router-dom';


function Courses() {
  const[kursus, uuendaKursus] = useState("Valimata");

  return (
    <div>
        <Link to="/">
          <button>Tagasi</button>
        </Link>
        <button onClick={() => uuendaKursus("udemy")}>Udemy</button>
        <button onClick={() => uuendaKursus("coursera")}>Coursera</button>
        <button onClick={() => uuendaKursus("codeacademy")}>Codeacadmey</button>
        <button onClick={() => uuendaKursus("udacity")}>Udacity</button>
        {kursus ==="udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus ==="coursera" && <div>Siin on kirjeldus (loend) Coursera.com läbitud kursustest</div>}
        {kursus ==="codeacademy" && <div>Siin on kirjeldus (loend) CodeAcademy.com läbitud kursustest</div>}
        {kursus ==="udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
          
    </div>
  );
}

export default Courses;
