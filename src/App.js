import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from'./Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import tripods_banner from './Components/Assets/tripods_banner.png'
import monopods_banner from './Components/Assets/monopods_banner.png'
import microphones_banner from './Components/Assets/microphones_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
  
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Tripods' element={<ShopCategory banner={tripods_banner} category="Tripods"/>}/>
        <Route path='/Monopods' element={<ShopCategory banner={monopods_banner} category="Monopods"/>}/>
        <Route path='/Microphone' element={<ShopCategory banner={microphones_banner} category="Microphone"/>}/>
        <Route path="/product" element ={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
