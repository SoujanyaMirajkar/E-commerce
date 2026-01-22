
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './App.css'
import { HomePage } from './pages/home/HomePage';
//import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';
import { useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product,deliveryOption')
    setCart(response.data)
  };
  useEffect(() => {

    loadCart();
  }, [])



  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} loadCart={loadCart} />}></Route>
        <Route path='checkout' element={<CheckOutPage cart={cart} setCart={setCart} />}></Route>
        <Route path='orders' element={<OrdersPage cart={cart} />}></Route>
      </Routes>
    </>
  );
}

export default App
