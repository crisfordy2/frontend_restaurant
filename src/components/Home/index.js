import React, { useEffect } from "react";
import "./style.css";
// import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function Home() {
    useEffect(()=>document.title = 'Inicio')
    return(
    <>
        <h1 className="title-index">Manhattan Crush</h1>
    </>
    )
}

