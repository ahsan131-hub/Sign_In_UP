import React from 'react'

const Header = ({onClick,isSignIn}) => {
    return (
        <div className="text-right ">
            <button className="btn btn-blue" onClick={onClick}>{ `${isSignIn==true ? 'Sign Up':'Sign In'}`}</button>
        </div>
    )
}

export default Header
