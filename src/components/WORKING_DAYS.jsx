import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import working_img from '../assets/img/png/working-days.png'

const WORKING_DAYS = () => {
    return (
        <section className='lightwhite_bg' id='Services'>
            <Container className='py-5 '>
                <div className='WORKING_DAYS_w mx-auto my-lg-5'>
                    <Row className=' align-items-center'>
                        <Col xs={12} lg={6}>
                            <img className=' w-100' src={working_img} alt="working" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className='px-4 py-3 py-lg-0'>
                                <h2 className=' ff_Poppins fw_700 fs_7xl white ps-3 WORKING_DAYS_p position-relative'>WORKING DAYS</h2>
                                <p className=' ff_Jost fw_400 fs_2xl black'>We are open on all six days in a week </p>
                                <div className='WORKING_DAYS_Monday_w d-flex justify-content-between align-items-center'>
                                    <p className=' ff_Poppins fw_700 fs_lg white mb-0'>Monday</p>
                                    <p className=' ff_Poppins fw_400 fs_sm black mb-0'>9Am to 10pm</p>
                                </div>
                                <div className='WORKING_DAYS_Monday_w d-flex justify-content-between align-items-center mt-5'>
                                    <p className=' ff_Poppins fw_700 fs_lg white mb-0'>Friday</p>
                                    <p className=' ff_Poppins fw_400 fs_sm black mb-0'>9Am to 10pm</p>
                                </div>
                                <a href="#" className=' ff_Jost fw_400 fs_2xl black d-inline-block WORKING_DAYS_btn mt-5'>Book Now</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default WORKING_DAYS