
import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import  "../App.css";
import {Link} from "react-router-dom";
const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleRegistration = (data) =>{
    console.log(data)
    localStorage.setItem(data.email,JSON.stringify({
      name:data.name,password:data.password
    }))
    console.log(JSON.parse(localStorage.getItem(data.email)))
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
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="form">
    <h1><center>Register</center></h1>
      <div className="container">
        <label>Name</label>
        <input name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
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
      <button>Submit</button><br></br>
      <Link to="/Login">Already Registered?</Link>
    </form>
    </div>
  );
};
export default RegisterForm;