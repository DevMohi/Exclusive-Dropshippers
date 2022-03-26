import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">

            <div className='px-5'>
                <Navbar.Brand href="#home">Exclusive Dropshippers</Navbar.Brand>
            </div>


        </Navbar>
    );
};

export default Header;