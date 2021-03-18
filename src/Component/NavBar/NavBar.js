import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg" >
                <div className = "container">
                    <Navbar.Brand as={Link} to ="/" className="title">Farhan's Travel Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto ">
                                <Nav.Link as={Link} to ="/home" >Home</Nav.Link>
                                <Nav.Link as={Link} to ="/destination" >Destination</Nav.Link>
                                <Nav.Link as={Link} to ="/blog" >Blog</Nav.Link>
                                <Nav.Link as={Link} to ="/contact" >Contact</Nav.Link>
                                <Nav.Link as={Link} to ="/login"  className="btn btn-info text-white">Log In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </div> 
          </Navbar>
    );
};

export default NavBar;