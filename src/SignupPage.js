import LoginPage from './LoginPage';
import React, {useState} from 'react';
import './SignupPage.css';
import loginimage from './Group 462.png';
import Layout from './Layout';
import Axios from 'axios';


function Signup() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");
  
    const register = () => {
      Axios.post('http://localhost3002/register', {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      }) ;
    }
  
    const login = () => {
      Axios.post('http://localhost3002/login', {
        username: username,
        password: password,
  
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus(response.data[0].username)
        }
      }) ;
    }


    return (

        <div className="Login">

        <Layout>
            <div className="phatBox">

            {/* <LoginPage/> */}
          <div className="registration">
          <h1 className="heading"><h2>Don't have an account? Join our program!</h2></h1>
          <label className="label">Username</label>
          <input type="text" onChange={(e) => {
            setUsernameReg(e.target.value)
          }}></input>
          <label className="label">Password</label>
          <input type="text"></input>
          <button className="button" onClick={register}>Register</button>
          </div>

        <img className="image" src={loginimage} alt="img"/>

          </div>

            
        </Layout>

        

     

        </div>

    );
}

export default Signup;