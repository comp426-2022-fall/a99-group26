import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {

    let navigation = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigation("/")

        })

    }
    return (
        <div className="loginPage">
            <p> Sign in with Google to Login</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign in with Google</button>
        </div>
    );
}

export default Login;