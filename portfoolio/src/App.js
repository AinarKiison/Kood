import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
import Navbar from './components/Navbar'

function App() {
  return (

    <div>
          
          <img className="main-picture" src="/orange.png" alt="orange"/>
          <div className="rectangle"></div>

          <div className="navigation-pictures">

            <Link className="main-link" to="work">
              <img src="/orange1.jpg" alt="orange"></img>
              <p>Tööd</p>
            </Link>
            <Link className="main-link" to="hobbies">
              <img src="/orange2.jpg" alt="orange"></img>
              <p>Hobid</p>
            </Link>
            <Link className="main-link" to="courses">
              <img src="/orange3.jpg" alt="orange"></img>
              <p>Kursused</p>
            </Link>

          </div>
          

          <Routes>
            <Route path="" element={ <Navbar />} />
            <Route path="work" element={ <Work />} />
            <Route path="hobbies" element={ <Hobbies />} />
            <Route path="courses" element={ <Courses />} />
          </Routes>
          
          <a className='facebook-button' href='www.facebook.com'>
            <img src='/facebook.png' alt="facebook link"/> 
            <span>Facebook</span>
          </a>
    </div>
  );
}

export default App;
