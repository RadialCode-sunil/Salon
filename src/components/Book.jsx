import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Btn from './Btn';


const Book = () => {
    return (
        <section className='Book_bg' id='Contact'>
            <Container className=' py-5'>
                <Row className='py-5 align-items-center text-center text-lg-start'>
                    <Col xs={12} lg={6}>
                        <p className=' ff_Jost fw_400 fs_2xl yellow'>Book Now</p>
                        <h2 className=' ff_Poppins fw_700 fs_9xl white'>Book your Appointment Online.</h2>
                        <p className=' ff_Poppins fw_500 fs_3xl lightwhite2 Book_p_w_lg pt-2'>
                            Get 10% Discount on your first hair cut by using our website.
                        </p>
                        <div className='pt-3'>
                            <Btn btn_id="Appointment" any_text="Book Appointment" />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='Book_box ms-auto me-auto d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0'>

                            <a href="#" className='Book_box_call_box d-flex justify-content-center align-items-center'>
                                <svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.34 29.9616L25.9023 25.9865C25.5846 25.8176 25.2315 25.7821 24.8961 25.8851C24.5608 25.9882 24.2613 26.2243 24.0429 26.5579L20.7491 31.5765C15.5798 28.537 11.4197 23.3491 8.98238 16.9026L13.0067 12.795C13.2747 12.5231 13.4645 12.1496 13.5472 11.7312C13.6298 11.3128 13.6009 10.8722 13.4649 10.4761L10.2773 1.20089C10.128 0.773905 9.86385 0.425286 9.53047 0.215146C9.1971 0.00500628 8.81537 -0.0534821 8.45112 0.0497661L1.54475 2.03732C1.19357 2.13845 0.880239 2.38504 0.655908 2.73684C0.431577 3.08864 0.309489 3.52488 0.30957 3.97436C0.30957 25.2163 14.1157 42.4004 31.1226 42.4004C31.4831 42.4007 31.8331 42.2485 32.1153 41.9687C32.3976 41.689 32.5954 41.2981 32.6765 40.86L34.2703 32.2473C34.3526 31.7908 34.3047 31.3129 34.1349 30.8957C33.9651 30.4786 33.684 30.1482 33.34 29.9616Z" fill="#FBB034" />
                                </svg>

                            </a>
                            <p className=' ff_Poppins fw_700 fs_3xl lightwhite mb-0 pt-1'>Call Now</p>
                            <p className='ff_Poppins fw_700 fs_6xl balck mb-0'>0300 7715325</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Book