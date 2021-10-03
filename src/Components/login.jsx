import react  from "react";
import { useHistory } from "react-router";
import GoogleLogin from "react-google-login";
export default function Login(){
    let history = useHistory(); 
    const handleLogin = ()  => {
        history.push("/dashboard")
    }
    return (
    <div>
        <h1>Login</h1>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    </div>)
}