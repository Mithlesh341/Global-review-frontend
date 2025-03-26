import {Route, Routes} from "react-router-dom"
import React from "react";
import Home from "./components/Home/Home.jsx"
import Utils from "./utility/utils.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
       <ToastContainer/>
       <Utils/>
      
    </div>
    
  )
}

export default App;
