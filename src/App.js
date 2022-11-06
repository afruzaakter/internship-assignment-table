
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Update from './Components/Update';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} > </Route>
        <Route path='/home' element={<Home />} > </Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/showTableData' element={<Table/>}></Route>
        <Route path='/table' element={<Table/>}></Route>
       
      </Routes>

    </div>
  );
}

export default App;
