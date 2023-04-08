import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Affiliate = () => {
    return (
        <section className='Affiliate_bg_img '>
            <Container className='py-5'>
                <div className=' text-center py-5 my-3'>
                    <p className=' ff_Jost fw_400 fs_2xl yellow pt-5'>Affiliate</p>
                    <h2 className=' ff_Poppins fw_700 fs_8xl white Affiliate_h2_w mx-auto'>
                        Join Us Become a part of Us by becoming an affiliate
                    </h2>
                    <a href="#" className=' ff_Poppins fw_700 fs_md yellow Affiliate_btn d-inline-block mt-4'>Partner Program</a>

                </div>
            </Container>
        </section>
    )
}

export default Affiliate