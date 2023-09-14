import { useState } from 'react'
import Authenticate from './components/Authenticate'; 
import SignUpForm from './components/signupform';
import './App.css';

const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(null)

  return (
    <>
    {/* this is mounting the components inside the jsx app() */}

    < SignUpForm token={token} setToken={setToken}/>
    
    < Authenticate token={token} setToken={setToken}/>

  
    </>
  );
}

export default App
