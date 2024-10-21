import{Link,Route,Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';
import Seaded from "./pages/Seaded";
import Ostukorv from "./pages/Ostukorv";
import Tooted from './pages/Tooted';


function App() {
  return (
    <div>

      <Link to="/"><button>Avalehele</button></Link>
      <Link to="/all"><button>Vaata sülearvuteid</button></Link>
      <Link to="/add"><button>Lisa sülearvuti</button></Link>
      <Link to="/seaded"><button>Seadetesse</button></Link>
      <Link to="/cart"><button>Ostukorv</button></Link>
      <Link to="/products"><button>Vaata tooteid</button></Link>

      <Routes>
        <Route path="" exact element={<Avaleht/>}></Route>
        <Route path="all" exact element={<VaataArvuteid/>}></Route>
        <Route path="add" exact element={<LisaArvuti/>}></Route>
        <Route path="cart" exact element={<Ostukorv/>}></Route>
        <Route path="seaded" element= {<Seaded/>}></Route>
        <Route path="products" element= {<Tooted/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
