import { useState } from "react";

// const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({token}){
const [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);

console.log("working?");

async function handleClick(){
    try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const result = await response.json();
    console.log("Authenticate Result: ", result);
    const username = result.data.username;
    setSuccessMessage(`${result.message} Welcome ${username}`);
    } catch (error){ 
    setError(error.message);
    }
}

    return (
    <div>
        <h2>Authentication before elemination!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}> Authenticate That MF!</button>
    </div>
    );
}