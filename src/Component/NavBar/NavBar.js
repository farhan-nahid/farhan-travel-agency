import firebase from "firebase/app";
import React, { useContext, useRef, useState } from 'react';
import { Button, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import userImage from './img/40541.png';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
    const {id, img ,name} = loggedInUser;
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    const handelSignOut= () => {
        firebase.auth().signOut()
        .then(res =>{
            const signOutUser = { 
                loggedInUser:false,
                name:""
            }
            setLoggedInUser(signOutUser)
        })
        .catch(err=>{

        })
    }

    return (
            <Navbar bg="light"  expand="lg" >
                <div className = "container">
                    <Navbar.Brand as={Link} to ="/" className="title">Farhan's Travel Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto ">
                                <Nav.Link as={Link} to ="/home" >Home</Nav.Link>
                                <Nav.Link as={Link} to ={`/destination/${id}`}>Destination</Nav.Link>
                                <Nav.Link as={Link} to ="/blog" >Blog</Nav.Link>
                                <Nav.Link as={Link} to ="/contact" >Contact</Nav.Link>
                                <Nav.Link> 
                            {

                                loggedInUser.name|| loggedInUser.email ? 
                                <div ref={ref}>
                                {

                                    loggedInUser.img ?
                                    <img src= {img} alt =".." ref={target} style={{ height:"30px", width:"30px", borderRadius:"50%"}} onClick={handleClick}/>

                                    :<img src= {userImage} alt =".." ref={target} style={{ height:"30px", width:"30px", borderRadius:"50%"}} onClick={handleClick}/>
                                    
                                }
                          
                                <Overlay
                                  show={show}
                                  target={target}
                                  placement="bottom"
                                  container={ref.current}
                                  containerPadding={20}
                                >
                                  <Popover id="popover-contained"  className="text-center" >
                                  {

                                        loggedInUser.img ?
                                        <img style={{borderRadius:"50%", height:"60px", width:"60px"}} src={img} alt=""/> 
                                        
                                        :<img style={{borderRadius:"50%", height:"60px", width:"60px"}} src={userImage} alt=""/> 
                                        
                                    }
                                    <Popover.Content>
                                      <h6>{name}</h6>
                                      <Button variant="info"  onClick={handelSignOut}> Log Out</Button>
                                    </Popover.Content>
                                  </Popover>
                                </Overlay>
                              </div>
                              
                                :  <Nav.Link as={Link} to ="/login"  className="btn btn-info text-white">Log In</Nav.Link> 
                            
                            }
                            </Nav.Link> 
                            </Nav>
                        </Navbar.Collapse>
                </div> 
          </Navbar>
    );
};

export default NavBar;



