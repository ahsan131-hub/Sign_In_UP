import SignIn from './components/SignIn';
import logo from './logo.svg';
import Header from './components/Header';
import {useState} from 'react'
import SignUp from './components/SignUp'
function App() {
  const [isSignIn, setIsSignIn] = useState(true)
  const onClick=()=>{
    setIsSignIn(!isSignIn);
  }
  const signUpFunc=(singUpReg)=>{
    console.log(singUpReg);

  }
  const signInFunc=(singUpReg)=>{
    console.log(singUpReg);

  }
  
  return (
    <div className="container col-xs-4 col-xs-offset-4 border border-black p-5">
      <Header onClick={onClick} isSignIn={isSignIn}/>
      {isSignIn ?<SignIn signInFunc={signInFunc}/>:<SignUp signUpFunc={signUpFunc}/>}
    </div>
  );
}

export default App;
