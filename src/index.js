import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Home from './pages/Home';
import Test from './pages/Test';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from './pages/Usuarios';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
    <div className="App">
      
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Usuarios' element={<Usuarios />}></Route>


      </Routes>
    </div>
    </Router>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
