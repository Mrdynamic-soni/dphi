import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';


const Leader = () => {
    const navigate  = useNavigate();
    const submit =(e)=>{
        e.preventDefault();
        navigate("/Addhackathon")
    }
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className='overview' href="#home">Overview</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
                                <button className='btn btn-success px-5 mx-4' onClick={(e)=>submit(e)}> Edit </button>
                                <button className="btn btn-outline-danger px-4 mx-4"> Delete </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Leader