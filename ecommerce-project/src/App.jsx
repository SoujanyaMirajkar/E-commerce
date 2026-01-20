import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOutPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='checkout' element={<CheckOutPage />}></Route>
      </Routes>
    </>
  );
}

export default App
