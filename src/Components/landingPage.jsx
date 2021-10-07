import React from "react"
import { useHistory } from "react-router"
export default function LandingPage(){
    let history = useHistory();
    const handleClick = () =>{
        history.push("/login");
    }
    return (
    <div>
        <button onClick={handleClick}>Login</button>
    </div>
    );
}