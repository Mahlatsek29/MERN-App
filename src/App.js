
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';

const App = () => {
  return (
    <div className="App">
      <ToastContainer theme='coloured' position='top-center'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/EmpPage' element={<EmpPage/>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* {<Route path="/emp" element={</>}/>} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const EmpPage = () => {
  return (
    <div>
      <h1>Employee Management Logging System</h1>
      <EmpListing/>
      <EmpCreate/>
      <EmpDetail/>
      <EmpEdit/>
    </div>
  );
};

export default App;