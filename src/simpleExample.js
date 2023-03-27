import { useForm } from "react-hook-form";
import "./App.css"
const SignUp=()=>{
    const{register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
<form onSubmit={handleSubmit(onSubmit)}>
    <h1>Create account</h1>
    <label>Your name</label><br></br>
    <input type="text" {...register('text',{required:true})} /><br></br>
    <label>Email</label><br></br>
    <input type="email" {...register('email',{required:true})} /><br></br>
    <label>Password</label><br></br>
    <input type="password" {...register('password',{required:true})} /><br></br>
    <h4>Passwords must be at least 6 characters</h4><br></br>
    <label>Re-enter password</label>
    <input type="password" {...register('password',{required:true})} /><br></br>
    <button>Create your Account</button><br></br>


    <h4>Already have an account? Sign in</h4>

</form>
    )
}
export default SignUp;

{/*import{useForm} from 'react-hook-form';
import signUp from './signUp'
const App=()=>{
const{register,handleSubmit,formState:{errors}}=useForm();
const onSubmit=(data)=>{
  console.log(data);
}
  return(
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in</h1>
      <label>Email</label>
      <input type="email" {...register("email",{required:true})} /><br></br>
      <label>Password</label>
      <input type="password" {...register("password",{required:true})} /><br></br>
      <button>sign in</button>
      <h3>New User</h3>
      <button>Create your Account</button>
    </form>
    <signUp />
    </div>
  )
}
export default App;
{/*import {useState} from 'react';
function App(){
  const[count,setCount]=useState(0)
function Event(){
  setCount(count+1)
}
  return(
    <>
  <center>
  <p>You clicked {count} times</p>
<button onClick={Event}>Click me!</button>
</center>
    </>
  )
}
export default App;


const App=()=>{
const [inputValue,setInputValue]=useState('')
const handleChange=(e)=>{
  setInputValue(e.target.value);
}

  return(
<form>
<label>
  Input Value:
  <input type="text" value={inputValue} onChange={handleChange} />
</label>
<p>input Value: {inputValue}</p>
</form>
  )
}
export default App
*/}
