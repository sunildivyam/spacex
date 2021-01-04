import React from 'react';
import { Navbar } from 'react-bootstrap';
import './AppFooter.scss';

export function AppFooter() {

    return (
        <Navbar bg="dark" variant="dark" className="AppFooter">
            <strong>Developed by: </strong> <span> Sunil Kumar</span>
        </Navbar>
    );
}
