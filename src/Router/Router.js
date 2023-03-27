import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import  Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Projects from "../Pages/Projects";
import Login from "../Pages/Login";
import RegisterForm from "../Pages/RegisterForm";
import Navbar from "../Components/Layout/Navbar"
 export default function  MainRouter(){
    return(
<BrowserRouter>
      {/*<Navbar />*/}
<Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/projects"  exact element={<Projects />} />
    <Route path="/Home"  exact element={<Home />} />
    <Route path="/Blogs"  exact element={<Blogs />} />
    <Route path="/Login" exact element={<Login />} />
   <Route path="/RegisterForm" exact element={<RegisterForm />} />
</Routes>
</BrowserRouter>
    )
    };