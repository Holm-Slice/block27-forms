import { useState } from "react"

// const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"



export default function SignUpForm({setToken}){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


async function handleSubmit(event,token) {
    event.preventDefault();

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: username, 
                  password: password 
                }),
              });
      const result = await response.json();
      setToken(result.token)
      console.log(result);
    } catch (error) {
      
    }}

    return(
        <>
   <h2>Uhhh, we're gonna need to see some credentials...</h2>
   {error && <p>{error}</p>}
 {/* <div className="user-info"> */}
  <form onSubmit={handleSubmit}>

  <label>
    Username:{" "}
     <input className="user-input" value={username}
            onChange={(e) => setUsername(e.target.value)}/>
    <br />
  </label>
{/* </div> */}
{/* <div className="pw-input"> */}
  <label>
    Password:{" "}  
    <input
    className="pw-input" 
    type="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}/>
  </label>
 {/* </div> */}
  <br />
  <button>Submit</button>
  </form>
        </>
    );
}
