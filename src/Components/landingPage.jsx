import React from "react"
import { useHistory } from "react-router"
import Navbar from './navbar/Navbar'
export default function LandingPage(){
    let history = useHistory();
    const handleClick = () =>{
        history.push("/login");
    }
    return (
    <div>
        
    </div>
    );
}