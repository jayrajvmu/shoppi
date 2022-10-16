import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Form(){
    const [name, setName] = useState('jay');
    const [number, setNumber] = useState('');
    const handleSubmit=(event)=> {
        setName(event.target.value)
      }
      const navigate = useNavigate();

      const routeChange = () =>{ 

        let path = `/des?name=${name}`; 
        navigate(path);
      }
      
      console.log(name);
    return (
        <div>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' value={name} onChange={handleSubmit}/>
       
        

        <button onClick={routeChange}>
          Click me
        </button>
        </div>
        )
}

export default Form;