import React from "react"
import { useHistory } from "react-router";
export default function Dashbord(){
    let history = useHistory();
    const handleLogout = () => {
        history.push("/")
    }
    return (
    <div>
        <h1>Done bruh</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
    );
}