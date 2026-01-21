
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';
//import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='checkout' element={<CheckOutPage />}></Route>
        <Route path='orders' element={<OrdersPage />}></Route>
      </Routes>
    </>
  );
}

export default App
