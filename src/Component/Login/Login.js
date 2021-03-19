import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
//import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { UserContext } from '../../App';
import { firebaseConfig } from './firebase.config';
import facebook from './Icon/fb.png';
import google from './Icon/google.png';
import './Login.css';


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
    <div className="container">
        <div className="form">
            <form action="">
                <input type="text" className="form-control" placeholder="Name" /> <br/> <br/>
                <input type="email" className="form-control" placeholder="Username or Email" /> <br/> <br/>
                <input type="password" className="form-control"  placeholder="Password" /> <br/> <br/>
                <input type="password" className="form-control" placeholder="Confirm Password" /> <br/> <br/>
                <input type="submit" className="form-control btn btn-info"  value="Create New Account"/>
              </form>
              <h6 className="mt-2">Already Have a Account ? log in</h6>
        </div>
        <div>
            <h1 className="StateLine"><span className="stateLine">Or</span></h1>
            <div className="icon" onClick={handelGoogleSignIn}>
                  <img src={google} alt="" />
                  <span>Continue with Google</span>
              </div>
              <div className="icon" onClick={handelGoogleSignIn}>
                  <img src={facebook} alt="" />
                  <span>Continue with Facebook</span>
              </div>
        </div>
    </div>
);
};

export default Login;