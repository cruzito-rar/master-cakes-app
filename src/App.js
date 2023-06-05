import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Catalogue from './components/pages/Catalogue';
import Catalogue1 from './components/pages/Catalogue1';
import Catalogue2 from './components/pages/Catalogue2';
import About from './components/pages/About';
import Mision from './components/pages/Mision';
import Shipments from './components/pages/Shipments';
import Privacy from './components/pages/Privacy';
import Return from './components/pages/Return';
import Footer from './components/navigation/Footer';
import { useAddDecrease } from './components/functions/Add_Decrease';

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { quantity, increaseQuantity, decreaseQuantity } = useAddDecrease();
  const [selectedCakes, setSelectedCakes] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    setCartQuantity(selectedCakes.length);
  }, [selectedCakes]);

  return (
    <Router>
     <Navbar quantity={quantity} decreaseQuantity={decreaseQuantity} selectedCakes={selectedCakes} setSelectedCakes={setSelectedCakes} total={total} setTotal={setTotal}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/online-catalogue' element={<Catalogue quantity={cartQuantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} setSelectedCakes={setSelectedCakes} selectedCakes={selectedCakes} total={total} setTotal={setTotal}/>}/>
        <Route path='/thematics-catalogue' element={<Catalogue1/>}/>
        <Route path='/customized-catalogue' element={<Catalogue2/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mision-vision' element={<Mision/>}/>
        <Route path='/shipments-policy' element={<Shipments/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/return-policy' element={<Return/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;