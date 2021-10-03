import react  from "react";
import { useHistory } from "react-router";
import GoogleLogin from "react-google-login";
export default function Login(){
    let history = useHistory(); 
    const handleLogin = (res)  => {
        console.log(res);
        history.push("/dashboard")
    }
    const handleAnonymous = () => {
        history.push("/dashboard");
    }
    return (
    <div>
        <h1>Login</h1>
        <GoogleLogin
            clientId="1032167174701-bscvulohd5d6lpppmga4341uguhvma86.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
        <h2>OR</h2>
        <button onClick = {handleAnonymous}>Sign In Anonymously</button>
    </div>)
}