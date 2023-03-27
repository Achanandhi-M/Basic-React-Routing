import React from "react";
import {Link} from "react-router-dom";
import styles from "../App.css";
import Navbar from "../Components/Layout/Navbar";
import { appendErrors, useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) =>{
    console.log(data)
    const userData=JSON.parse(localStorage.getItem(data.email));
    if(userData){
        if(userData.password===data.password){
            console.log(userData.name +  "You are Successfully Logged in")
        }else{
            console.log('Email or password is not matching')
        }
    }else{
        console.log('Email or password is not matching')
    }
  }
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required"},
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <div className="main-container">
      <Navbar />
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="form">
      <h1><center>Login</center></h1>
      <div className="container">
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div className="container">
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button>Hack</button><br></br>
      <span>New User?</span>
     <Link to="/RegisterForm">Sign Up</Link>
    </form>
    </div>
  );
};
export default Login;
