import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [credentials, setCredential] = useState({userId:"", password:""});
    let navigate =useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://apidev.mahindradealerrise.com/login', {
        method:'POST',
        headers: {
            'Content-type':'application/json'
            
        },
        body: JSON.stringify({userId:credentials.userId, password:credentials.password})
    });
    const json=await response.json()
    console.log(json);
    if(json.status==="OK"){
            //redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/")
    }
    else if(json.status==='BAD_REQUEST'){
        alert("invalid credentials");
    }
    else {
        alert("invalid credentials");
    }
    }
    const onChange = (e) => {
        setCredential({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-3">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          userId
        </label>

        <input
        type="text"
          className="form-control"
          id="userId"
          name="userId"
          value={credentials.userId}   
          onChange={onChange} 
        />
    
        
      </div>
      <div className="mb-3 ">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" onChange={onChange}  className="form-control" value={credentials.password} name="password" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
