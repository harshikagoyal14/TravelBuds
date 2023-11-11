import { GoogleLogin } from 'react-google-login';
import React from 'react'

const clientId = "1086908533986-00i42d0mn3a1mkqbdtq2l31kk6dap8pj.apps.googleusercontent.com";

const GoogleLoginButton = () => {

    const onSuccess = (res) =>{
        console.log("LOGIN SUCCESS ! Current use:", res.profileObj);
    }

    const onFailure =(res) =>{
        console.log("LOGIN FAILED ! res : ",res);
    }
  return (
    <div id = 'googleSignup-btn'>
        <GoogleLogin
            clientId = {clientId}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
        />

    </div>
  )
}


export default GoogleLoginButton;
