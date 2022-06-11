import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import './index.css';
import './style/main.css';


import Home from './elements/Home/Home';
import Authenticate from './elements/Authenticate/Authenticate';
import Login from './elements/Authenticate/Login/Login';
import Register from './elements/Authenticate/Register/Register';
import ForgetPass from './elements/Authenticate/ForgetPass/ForgetPass';
import Docs from './elements/Docs/Docs';
import TODO from './elements/TODO/Todo';
import FeaturePage1 from './elements/Home/Features/page1';
import FeaturePage2 from './elements/Home/Features/page2';
import FeaturePage3 from './elements/Home/Features/page3';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>

      <Route exact path={"/"} element={<Home/>} >
        
        <Route path={"/home"} element={<FeaturePage1/>} />
        <Route path={"/feature"} element={<FeaturePage1/>} />
        <Route path="/home/feature1" element={<FeaturePage1/>} />
        <Route path="/home/feature2" element={<FeaturePage2/>} />
        <Route path="/home/feature3" element={<FeaturePage3/>} />
        <Route path="" element={<FeaturePage1/>} />
      </Route>
      
      <Route path="/docs" element={<Docs/>} />

      <Route exact path="authenticate" element={<Authenticate />} >
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgetpass" element={<ForgetPass />} />
      </Route>

      <Route path='/todo' element={<TODO />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
