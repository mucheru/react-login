import {React,useState} from "react";
//import './components/Login/Login.css';
import '/home/steve/auth-login/src/components/Login/Login.css'
import PropTypes from 'prop-types';

 async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(credentials)
    }).then(data=>data.json())

}


export default function Login({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const token= await loginUser({
            username,password
        })
        setToken(token);

    }

    return(
        <div className="login-wrapper">

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                <input type="text" onChange={e=>setUserName(e.target.value)}/>
                </label>

                <label>
                    <p>Password</p>
                <input type="text" onChange={e=>setPassword(e.target.value)} />
                </label>
                <div>
                <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )

}
Login.prototype={
    setToken:PropTypes.func.isRequired
}