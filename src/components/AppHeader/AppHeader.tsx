import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import './AppHeader.scss';

export function AppHeader() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                SpaceX Program
            </Navbar.Brand>
        </Navbar>
    );
}
