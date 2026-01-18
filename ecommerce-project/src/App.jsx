import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/checkout' element={<div>Test checkout page</div>}></Route>
      </Routes>
    </>
  );
}

export default App
