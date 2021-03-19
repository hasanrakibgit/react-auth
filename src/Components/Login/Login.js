import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import "../../App.css"

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
};

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                };
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(result => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: ' ',
                    email: ' ',
                    password: ' ',
                    error: ' ',
                    success: false,
                }
                setLoggedInUser(signedOutUser);
            }).catch(error => {

            });
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((result) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = '';
                    newUserInfo.success= true;
                    setLoggedInUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error= error.message;
                    newUserInfo.success= false;
                    setLoggedInUser(newUserInfo);
                });

        }
        e.preventDefault();
    }
    return (
        <div className="App">
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onBlur={handleBlur} placeholder="Name" required /><br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="Username or Email" required /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="password" required /><br />
                <input type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" required /><br />
                <input type="submit" value="Create an Account" />
            </form>
            <p style={{color:'red'}}>{loggedInUser.error}</p>
            {loggedInUser.success && <p style={{color:'green'}}>User Created Successfully</p> }
            <h1>This is Login</h1>
            {
                loggedInUser.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign out from Google</button> :
                    <button onClick={handleGoogleSignIn}>Sign in by Google</button>
            }


        </div>
    );
};

export default Login;