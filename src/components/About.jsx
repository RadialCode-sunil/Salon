import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import best_img from '../assets/img/png/best-img.png';
import Btn from './Btn';


const About = () => {
  return (
    <section className='About_bg_img' id='About'>
      <Container className=' py-5 my-lg-4'>
        <Row className=' align-items-center'>
          <Col xs={12} lg={6}>
            <div className=' d-flex justify-content-center'>
              <img className=' img-fluid' src={best_img} alt="Best img" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <p className=' ff_Jost fw_400 fs_2xl yellow'>About Us</p>
            <h2 className=' ff_Poppins fw_700 fs_9xl black About_h2_w_lg About position-relative'>
              Best Haircut Salon For Men
            </h2>
            <p className=' ff_Jost fw_400 fs_2xl darkgrey About_h2_w_lg pe-lg-5'>
              Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!
            </p>
            <div className='pt-4'>
              <Btn any_text="Read More" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About