import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Darshboard from "./component/Darshboard";
import Home from "./component/Home"
import Orderpage from "./component/Orderpage"
import Cart from "./component/Cart"
import Contact  from './component/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Orderlist from "./component/Orderlist";
import Login from './component/Login'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} /> 
     
      <Route path="orderpage" element={<Orderpage/>}/>
      <Route path="orderpage/:id" element={<Orderpage/>}/>
      <Route path="contact" element={<Contact/>}/>
       <Route path="cart" element={<Cart/>}></Route>
      <Route path="orderlist" element={<Orderlist/>}/>
        <Route path="add" element={<Login/>}/>
        <Route path="darsh" element={<Darshboard/>}></Route>
     
    </Routes>
  </BrowserRouter>



)
