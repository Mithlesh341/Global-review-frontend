import React from 'react'
import {Routes, Route} from "react-router-dom" 
import Home from '../components/Home/Home.jsx'
import Login from '../components/Home/login/login.jsx'
import SignIn from '../components/Home/signin/signin.jsx'
import Review from '../components/review/review.jsx'
import Category from '../components/Home/categoryPage/category.jsx'

const utils = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/category' element={<Category/>} ></Route>
        
      </Routes>
    </div>
  )
}

export default utils
