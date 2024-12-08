import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Navbar expand="lg" className="bg-danger p-4">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link href="#home"><h4 className='text-white'>Home</h4></Nav.Link>
                            <Nav.Link href="#link" ><h4 className='ms-md-5 text-white'>Bookings</h4></Nav.Link>
                            <Nav.Link href="#link" onClick={openModal} style={{ cursor: 'pointer' }}><h4 className='ms-md-5 text-white'>How it works</h4></Nav.Link>
                        </Nav>
                        <button className='btn btn-success rounded p-2 ms-md-5 text-white'>Sign Out</button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {isModalOpen && (
                            <div className="modal-overlay p-4 shadow m-4">
                                <div className="modal-content">
                                    <h2 cla>HOW IT WORKS</h2>
                                    <div style={{ border: '2px solid red' }}></div>
                                    <div className='mt-4 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>1</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Find your car park!</h3>
                                            <p>Sign up and check your preferred place for parking</p>
                                        </div>
                                    </div>

                                    <div className='mt-2 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>2</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Book!</h3>
                                            <p>Select date and time, check availability,see prices..</p>
                                        </div>
                                    </div>

                                    <div className='mt-2 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>3</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Park!</h3>
                                            <p>Upon arrival, just show your reservation in the car park.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <marquee class="text-black text-9xl md:text-9xl text-6xl" scrollamount="25" behavior="" direction="left"><img src="https://www.scribblefun.com/wp-content/uploads/2020/02/Car.png" alt="" style={{ height: '50px', width: '100px' }} />  </marquee>
                                    </div>
                                    <button className='btn btn-danger text-white rounded' onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>


        </>
    )
}

export default Header