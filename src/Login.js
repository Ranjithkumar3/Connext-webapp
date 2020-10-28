import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://icon-library.com/images/icon-c/icon-c-20.jpg"
                    alt=""
                />
                <img 
                    style={{objectFit:`contain`, height:`300px`, width: `800px`}}
                    src="assets/CONNEXT FONT.png"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
