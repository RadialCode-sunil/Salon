import React from 'react';
import hero_img from '../assets/img/png/hero-img.png'
import Nav from './Nav';

import Button_2 from './Button_2';
import { Container, Row, Col } from 'react-bootstrap';
import Btn from './Btn';

const Hero = () => {

    return (
        <header className='min-vh-100 d-flex flex-column position-relative'>
            <Nav />
            <Container className=' d-flex flex-grow-1 align-items-center' id='Home'>
                <Row className='align-items-center '>
                    <Col xs={12} lg={7}>
                        <p className=' ff_Jost fw_400 fs_lg yellow'>Welcome To Choppers</p>
                        <h1 className=' ff_Poppins fw_700 fs_9xl white lh-1'>
                            Best Hair Salon For A
                            Professional Look
                        </h1>
                        <p className=' ff_Poppins fw_400 fs_4xl grey pt-4'>
                            Choppers offers high performance customized facials to provide you with visible results.
                        </p>
                        <div className='pt-5 d-flex flex-column flex-md-row'>
                            <Btn any_text="Book Now" />
                            <div className=' ps-md-5 py-3 pt-md-0'>
                                <Button_2 />
                            </div>
                        </div>

                    </Col>
                    <Col xs={12} lg={5}>
                        <img className='position-absolute hero_img_w end-0 bottom-0 d-none d-lg-block' src={hero_img} alt="Best Hair Salon" />
                    </Col>
                </Row>
            </Container>
            <img className=' img-fluid end-0 bottom-0  d-lg-none' src={hero_img} alt="Best Hair Salon" />
        </header>
    )
}

export default Hero;
