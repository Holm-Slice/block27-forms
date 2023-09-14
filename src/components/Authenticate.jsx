import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

export default function Authenticate({token}){
const [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);

console.log("Token", token);

async function handleClick(){
    try {
        const response = await fetch(API_URL,
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
    setSuccessMessage(`${result.message} Welcom ${username}`);
    } catch (error) {
    setError(error.message);
    }
}

    return (
    <div>
        <h2>Authentication Required!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}> Authenticate That MF!</button>
    </div>
    );
}