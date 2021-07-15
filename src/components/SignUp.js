import React from 'react'
import { useState } from 'react'
const SignUp = ({signUpFunc}) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [rePassword, setrePassword] = useState("")
    const onSubmit=(e)=>{
        e.preventDefault();
        if(userName==""||email==""){
            alert("Enter the User Name And User Email");
        }
        if(password==""||rePassword!==password){
            alert("Emter the Password Correctly");
        }

        signUpFunc(
            {
                userName:userName,
                password:password,
                email:email    
            });
        
            setUserName("");
            setpassword("");
            setEmail("");
            setrePassword("");
    }
    return (
        <div className="flex">
        <h1 className="text-center">Sign Up</h1>
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
                <label>Email</label>
                <input 
                 type="email"
                 className="form-control"
                 placeholder="E-mail"  
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                   
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
            
            <div className="form-group">
                <label>Retype-password</label>
                <input type="password" className="form-control" placeholder="Retype Password"
                value={rePassword}
                onChange={(e)=>setrePassword(e.target.value)}
                />
            </div>
            
            <button type="submit" className="btn btn-success">Sign Up</button>
        </form>
        
         </div>   
        
    )
}

export default SignUp
