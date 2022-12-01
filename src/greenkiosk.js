import './App.css';
import React,{ useState, useEffect } from 'react';
import moon from './moon.png';
import riding from './riding.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import User from "./user"
import Navbar from "./Navbar"
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';

<script src="https://kit.fontawesome.com/1dcd81bd82.js" crossorigin="anonymous"></script>
function Form() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  
  const [clicked, setClicked] =useState(false);
 

 
 useEffect(()=>{
   setClicked(false)
},[])
const handleSubmit=()=>{
  const data ={
  email:email,
  password:password
}
 //  alert(JSON.stringify(data)
  setClicked(true)
  
 }

return (
    <div class="Apps">
   
    <form class="form" onSubmit={handleSubmit}>
      <div class="header">
        <div class="logo">
          <img src={moon} width="30px" height="30px"></img>
          <p> EddieShop</p>
        </div>
        <div class="signup">
          <p>Don't have an account?<span><a href="#"> SignUp</a></span></p>
        </div>
        </div>

        <div class="inputs">
          <div class="content">
            <div class="details">
              <h2>Welcome Back</h2>
              <p>Your email</p>
              <input type="text"  id="email" placeholder="name@domain.com" value={email}
              onChange={(e)=>{setEmail(e.target.value)}}></input>
              <p>Password</p>
              <input type="text" placeholder="at least 8 characters" value={password} id="email"onChange={(e)=>{setPassword(e.target.value)}}></input>
          
            <div class="password">
            <div class="checkbx">
              <input type="checkbox"></input>Keep me logged in

            </div>
            <div class="p">
            <p><a href="#">Forgot password?</a></p>
            </div>
          </div>
  
          <button type="button" className={clicked?"btn":"button"}
            onClick={()=>setClicked(true)}>Login</button>

          <div class="lines">
          <div class="line1"></div>
          <p>Or</p>
          <div class="line2"></div>
          </div>
          
          <div class="social">
          <a href="#"><FontAwesomeIcon icon ={faFacebookF} id ="i"></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faGoogle} id ="i"></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} id ="i"></FontAwesomeIcon></a>
          </div>  
        </div>
      </div>

      <div class="image">
        <img src={riding}></img>
      </div>
      
      
     </div>
    </form>
    {email? <User email={email}/> :<Navbar />}
     {/* <User email={email ?email:"Loading.."}/> */}
  </div>
//conditional rendering(if else )
//skeleton rendering 
  );
}

export default Form;
























