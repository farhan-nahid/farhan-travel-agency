import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
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
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn : false,
    name : "",
    email : "",
    password : "",
    confirmPassword : "",
    error : "",
    successful : false,
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [passwordError, setPasswordError] = useState()
 
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  

// input value function
const handleBlur = (e) =>{
  let isFieldValid = true; 

 if(e.target.name === "email"){
   isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
 }
  if(e.target.name === "password"){
   const isPasswordValid = e.target.value.length > 7;
   const passwordHasNumber =  /\d{1}/.test(e.target.value);
   isFieldValid = isPasswordValid && passwordHasNumber;
 }
  if(e.target.name === "confirmPassword"){
   const isPasswordValid = e.target.value.length > 7;
   const passwordHasNumber =  /\d{1}/.test(e.target.value);
   isFieldValid = isPasswordValid && passwordHasNumber;
 }
 if(isFieldValid){
    const newUserInfo = {...user}
    newUserInfo[e.target.name] = e.target.value;
   setUser(newUserInfo);
 }
}

// form submit function
const handleSignUp = (e) => {
  const newUserInfo = { ...user }
  if(user.name && user.email && user.password && user.confirmPassword){
    firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
       .then((res) => {
      newUserInfo.error ="";
      newUserInfo.successful = true;
      setUser(newUserInfo);
      updateUserName(user.name)
      console.log(res.user);
  })
  .catch((error) => {
    const newUserInfo = { ...user }
    newUserInfo.error = error.message;
    newUserInfo.successful = false; 
    setUser(newUserInfo);
  });
  }
  e.preventDefault();
}

const handleLogin = (event) => {
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((result) => {
    console.log(result);
    const {displayName , email} = result.user;
    const signedInUser ={ name: displayName, email : email}
    setLoggedInUser  (signedInUser);
    history.replace(from)
  })
  .catch((error) => {
    const errorMessage = error.message;
    setPasswordError( errorMessage );
  });
  event.preventDefault();
}

const updateUserName = name =>{
  const  user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
})
.then(function() {
  console.log("name update successfully");
})
.catch(function(error) {
  console.log(error);
});
}


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

  // facebook provider function
const handelFacebookSignIn = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  firebase
  .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      const {displayName , email} = result.user;
      const signedInUser ={ name: displayName, email : email}
      setLoggedInUser  (signedInUser);
      history.replace(from);
   })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
}

return (
    <div className="container">

        { 
          user.successful ?  <p className="text-success text-center mt-5"> Successfully Created Account </p> 
          : 
          <p className="text-danger text-center mt-5">{user.error}</p>
        }

        <p className="text-center text-danger mb-3">{passwordError}</p>
        <div className="form">
          {newUser && <h5 className="mb-4">Create an Account</h5>}
          {!newUser && <h5 className="mb-4">Log In</h5>}
            <form>
                {newUser && <input type="text" name="name" className="form-control" onBlur={handleBlur} placeholder=" Enter Your Name" required /> } <br/> 

                <input type="email"  name="email" className="form-control" onBlur={handleBlur} placeholder="Enter Your Username or Email" required /> <br/> 

                <input type="password"  name="password" className="form-control" onBlur={handleBlur}  placeholder=" Type Your  Password" required />
                <small  class=" text-muted">Your Password must have eight digit & one number</small> 
                <br/> <br/>

                {newUser && <input type="password"  name="confirmPassword" className="form-control" onBlur={handleBlur}placeholder="Confirm Your Password" required />} <br/> 

                {
                 newUser && <input type="submit" onClick={handleSignUp} className="form-control btn btn-info"  value="Create New Account"/>
                 }

                 {
                 !newUser && <input type="submit" onClick={handleLogin} className="form-control btn btn-info"  value="Log In"/>
                 }
                 
              </form>

             { 
                newUser && <h6 className="mt-2 text-center">Already Have a Account ?
               <span className="link" onClick={() =>setNewUser(!newUser)}> log in</span>
               </h6>
              }
              
             { 
                !newUser && <h6 className="mt-2 text-center">Don't Have  Account ?
               <span className="link" onClick={() =>setNewUser(!newUser)}> Create New Account</span>
               </h6>
              }
               
        </div>
        <div>
            <h1 className="StateLine"><span className="stateLine">Or</span></h1>

                            {/* google sign in */}
                  <div className="icon" onClick={handelGoogleSignIn}>
                      <img src={google} alt="" />
                      <span>Continue with Google</span>
                  </div>

                               {/* facebook sign in */}
                  <div className="icon" onClick={handelFacebookSignIn}>
                      <img src={facebook} alt="" />
                      <span>Continue with Facebook</span>
                  </div>
            
        </div>
    </div>
);
};

export default Login;