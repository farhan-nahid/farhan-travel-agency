import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { UserContext } from '../../App';
import { firebaseConfig } from './firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  
  // google provider function
  const handelGoogleSignIn= () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    firebase
    .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName , email} = result.user;
        const signedInUser ={ name: displayName, email : email}
        setLoggedInUser  (signedInUser);
        history.replace(from)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  }
return (
    <div>
         <Button variant="danger"  onClick={handelGoogleSignIn}>Continue With Google</Button>
    </div>
);
};

export default Login;