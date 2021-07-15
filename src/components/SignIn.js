import React from 'react'
import { useState } from 'react'

const SignIn = ({signInFunc}) => {
    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
   
    const onSubmit=(e)=>{
        e.preventDefault();
        if(userName==""||password==""){
            alert("Enter the User Name And User Email");
        }

        signInFunc(
            {
                userName:userName,
                password:password,
                 
            });
        
            setUserName("");
            setpassword("");
         
    }
    return (
        <div className="flex">
        <h1 className="text-center">Sign In</h1>
        <form className="form-control m-2 " onSubmit={onSubmit}>
            <div className="form-group">
                <label>UserName</label>
                <input
                 type="text" 
                 className="form-control"
                 placeholder="User Name"
                 value={userName}
                 onChange={(e)=>setUserName(e.target.value)}
                 />
            </div>
            <div className="form-group">
                <label>password</label>
                <input 
                type="password"
                 className="form-control"
                  placeholder="password"
                 value={password}
                 onChange={(e)=>setpassword(e.target.value)}
                  />
            </div>
            
            <button type="submit" className="btn btn-success">Login</button>
        </form>
        
         </div>   
        
    )
}

export default SignIn
