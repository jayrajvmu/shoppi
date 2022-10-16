import React, { useState, useEffect } from "react";
import axios from 'axios'

function Login(){

    const [data, setDate]=useState({userName:'', password:""})

    const inputsHandler = (e) =>{
        const { name, value } = e.target;
        setDate( (pre)=>({  ...pre,
            [name]: value,}))
    }

 
    const submitData = () =>{
        // const data = { name:data.userName,password:data.password  };
        axios.post('http://localhost:5000/api', data)
            .then(response => console.log(response.data));
    }


    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={inputsHandler} name="userName" />

            <label>Password</label>
            <input type="number" onChange={inputsHandler} name="password"/>


            <button onClick={submitData}>Create User</button>
        </div>
    )
}

export default Login;