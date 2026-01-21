
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage';
//import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';
import { useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => setCart(response.data));
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} />}></Route>
        <Route path='checkout' element={<CheckOutPage cart={cart} />}></Route>
        <Route path='orders' element={<OrdersPage />}></Route>
      </Routes>
    </>
  );
}

export default App
