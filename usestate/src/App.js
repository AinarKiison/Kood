import { Link, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Ilmumine from './pages/Ilmumine';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Telefon from './pages/Telefon';
import Hind from './pages/Hind';

function App() {
  return (
    <div className='App'>

      <Link to="/Ilmumine"><button>Ilmumine</button></Link>
      <Link to="/Kujundus"><button>Kujundus</button></Link>
      <Link to="/Muutmine"><button>Muutmine</button></Link>
      <Link to="/Telefon"><button>Telefon</button></Link>
      <Link to="/Hind"><button>Ilmumine</button></Link>

      <Routes>
        <Route path="/" element={ <Navigate to ="/ilmumine" />} />
        <Route path="/ilmumine" element={ <Ilmumine />} />
        <Route path="/kujundus" element={ <Kujundus />} />
        <Route path="/muutmine" element={ <Muutmine />} />
        <Route path="/telefon" element={ <Telefon />} />
        <Route path="/hind" element={ <Hind />} />
      </Routes>
    </div>
  );
}

export default App;
