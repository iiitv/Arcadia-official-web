
import { useHistory } from "react-router";
import GoogleLogin from "react-google-login";
import "./login.css"
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
    <div className="main">
        <div className="headerCard">
            <div className="loginHeader">
                Login
            </div>
        </div>
        
        <div className="loginCard">
            <div className="googleLoginCard">
                <GoogleLogin
                className="try"
                    clientId="1032167174701-bscvulohd5d6lpppmga4341uguhvma86.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={(response) => console.log(response)}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            
            <div className="orContainer">
                Or
            </div>
            <div className="anonymousCard">
                <button onClick = {handleAnonymous}>Sign In Anonymously</button>
            </div>
            
        </div>
    </div>)
}