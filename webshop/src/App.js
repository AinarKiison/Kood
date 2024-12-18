import './App.css';
import { Navigate, Route, Routes} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar"

import HomePage from "./pages/global/HomePage"
import ContactUs from "./pages/global/ContactUs"
import Shops from "./pages/global/Shops"
import Cart from "./pages/global/Cart"
import SingleProduct from "./pages/global/SingleProduct"

import AdminHome from "./pages/admin/AdminHome"
import AddProduct from "./pages/admin/AddProduct"
import EditProduct from "./pages/admin/EditProduct"
import MaintainProducts from "./pages/admin/MaintainProducts"
import MaintainCategories from "./pages/admin/MaintainCategories"
import MaintainShops from "./pages/admin/MaintainShops"

import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import NotFound from "./pages/global/NotFound"
import { useContext, useState } from 'react';
import Supplier from './pages/admin/Supplier';
import Electricity from './pages/admin/Electricity';
import { AuthContext } from './store/AuthContext';


function App() {

const{loggedIn} =useContext(AuthContext);

const[darkMode, setDarkMode] = useState(localStorage.getItem("darkTheme"));

const darkThemeTrue = () => {
  setDarkMode("true");
  localStorage.setItem("darkTheme","true");
}
const darkThemeFalse = () => {
  setDarkMode("false");
  localStorage.setItem("darkTheme","false");
}




  return (
    <div className={darkMode === "true" ? "App-dark" : "App"}>
      
      <button onClick={darkThemeTrue}>Dark</button>
      <button onClick={darkThemeFalse}>Light</button>
  

      <NavigationBar ></NavigationBar>

      <Routes>

        

        <Route path='' element={<HomePage/>}></Route>
        <Route path='contact' element={<ContactUs/>}></Route>
        <Route path='shops' element={<Shops/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='product/:productName' element={<SingleProduct/>}></Route>
        
       {loggedIn === true &&
       <>
        <Route path='admin' element={<AdminHome/>}></Route>
        <Route path='admin/add-product' element={<AddProduct/>}></Route>
        <Route path='admin/edit-product/:index' element={< EditProduct />}></Route>
        <Route path='admin/maintain-products' element={<MaintainProducts/>}></Route>
        <Route path='admin/maintain-categories' element={<MaintainCategories/>}></Route>
        <Route path='admin/maintain-shops' element={<MaintainShops/>}></Route>
        <Route path='admin/supplier' element={<Supplier/>}></Route>
        <Route path='admin/electricity' element={<Electricity/>}></Route>
        </>
        }

        {loggedIn === false && <Route path='admin/*' element={ <Navigate to="/login" />}/>}
        
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>


        <Route path="*" element={<NotFound />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
