import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import umar_usman from '../assets/img/png/umar-usman.png';
import rabia from '../assets/img/png/rabia.png';
import star from '../assets/img/png/star.png';
import Btn from './Btn';
import hair_cut_tool from '../assets/img/png/hair-cut-tool.png'

const Testimonials = () => {
    return (
        <section className='lightwhite_bg overflow-hidden'>
            <Container className='py-5'>
                <Row className='pb-5'>
                    <Col xs={12} lg={5}>
                        <p className=' ff_Jost fw_400 fs_2xl yellow Testimonials_p position-relative'>Testimonials</p>
                        <h2 className=' ff_Poppins fw_700 fs_9xl black pe-lg-3'>What Our Clients Say About Us</h2>
                        <p className='ff_Jost fw_400 fs_2xl grey2 About_h2_w_lg pe-lg-5'>
                            Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!
                        </p>
                        <div className='mt-4'>
                            <Btn any_text="Give Reviews" />
                        </div>


                    </Col>
                    <Col xs={12} lg={7} className='pt-4 pt-lg-0'>
                        <Row className=' position-relative'>
                            <Col xs={12} sm={6}>
                                <div className='Testimonials_box position-relative text-center mx-auto'>
                                    <img src={umar_usman} alt="umar usman" />
                                    <p className=' ff_Poppins fw_700 fs_sm grey3 pt-3'>
                                        It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it
                                    </p>
                                    <img src={star} alt="star" />
                                    <p className='ff_Poppins fw_700 fs_md black mb-0'>Umar Usman</p>
                                    <p className='ff_Poppins fw_700 fs_ss grey4 mb-0'>Regular User</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className='pt-4 pt-sm-0'>
                                <div className='Testimonials_box position-relative text-center mx-auto'>
                                    <img src={rabia} alt="rabia" />
                                    <p className=' ff_Poppins fw_700 fs_sm grey3 pt-3'>
                                        It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it
                                    </p>
                                    <img src={star} alt="star" />
                                    <p className='ff_Poppins fw_700 fs_md black mb-0'>Rabia Khalil</p>
                                    <p className='ff_Poppins fw_700 fs_ss grey4 mb-0'>Regular User</p>
                                </div>
                            </Col>
                            <img className=' position-absolute Testimonials_box_img' src={hair_cut_tool} alt="Hair cut tool" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials