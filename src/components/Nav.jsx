import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/png/logo.png';
import Btn from './Btn';

const Nav = () => {
    return (
        <nav className='py-5'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <a href="#"><img src={logo} alt="logo" /></a>
                    <input className='d-none' type="checkbox" id="check" />
                    <label htmlFor="check">
                        <span className="d-flex flex-column d-lg-none">
                            <span className="nav_line"></span>
                            <span className="nav_line"></span>
                            <span className="nav_line"></span>
                        </span>
                    </label>
                    <ul className='list-unstyled d-flex align-items-center nav_left'>
                        <li className=''>
                            <a href="#Home" className=' ff_Poppins fw_700 fs_md white nav_a'>Home</a>
                        </li>
                        <li className='ps-lg-4 pt-5 pt-lg-0'>
                            <a href="#About" className=' ff_Poppins fw_700 fs_md white nav_a'>About Us</a>
                        </li>
                        <li className='ps-lg-4 pt-5 pt-lg-0'>
                            <a href="#Services" className=' ff_Poppins fw_700 fs_md white nav_a'>Services</a>
                        </li>
                        <li className='ps-lg-4 pe-lg-4 pt-5 pt-lg-0'>
                            <a href="#Contact" className=' ff_Poppins fw_700 fs_md white nav_a'>Contact</a>
                        </li>
                        <li className=' pt-5 pt-lg-0'>
                            <Btn any_text="Book Now" />
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Nav