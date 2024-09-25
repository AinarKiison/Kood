import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">
          <button>Avalehele</button>
        </Link>
        <Link to="/tagasiside">
          <button>Tagasiside lehele</button>
        </Link>
      </div>
      <Routes>
        <Route path ="/" exact element={<div>Tere</div>}></Route>
        <Route path ="/tagasiside" exact element={<Tagasiside />}></Route>
      </Routes>

    
    </div>
  );
}

export default App;
