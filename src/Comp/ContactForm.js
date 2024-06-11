import React, { useRef } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        axios.post('http://localhost:5000/send-email', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                alert('Message sent successfully!');
            })
            .catch((error) => {
                alert('Failed to send message, please try again.');
                console.error('Error:', error.response || error.message || error);
            });

        e.target.reset();
    };

    return (
        <Container className="contact-form-container">
            <Row>
                <Col md={6} className="left-section">
                    <h1>Hello There, Welcome to Big Frog Custom T-Shirts & More!</h1>
                    <h3>Where Fun is Always Celebrated</h3>
                    <p><strong>CHOOSE</strong> At Big Frog, there’s always an occasion worthy of custom gear...</p>
                    <p><strong>CREATE</strong> Let our friendly and highly creative graphic design team help you...</p>
                    <p><strong>CELEBRATE</strong> Come to the place where fun is always celebrated!...</p>
                </Col>
                <Col md={6} className="right-section">
                    <h3>Request More Information</h3>
                    <Form ref={formRef} onSubmit={sendEmail}>
                        <Row>
                            <Col>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name*</Form.Label>
                                    <Form.Control type="text" name="first_name" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name*</Form.Label>
                                    <Form.Control type="text" name="last_name" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="email">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" name="email" required />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="zip">
                                    <Form.Label>Zip Code*</Form.Label>
                                    <Form.Control type="text" name="zip_code" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <h3>Tell Us What You Need:</h3>
                        <Row>
                            <Col>
                                <Form.Group controlId="quantity">
                                    <Form.Label>How Many Do You Need?</Form.Label>
                                    <Form.Control type="text" name="quantity" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="color">
                                    <Form.Label>Color(s) of Garments</Form.Label>
                                    <Form.Control type="text" name="colors" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="size">
                                    <Form.Label>Size(s) of Garments</Form.Label>
                                    <Form.Control type="text" name="sizes" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="location">
                                    <Form.Label>Location of Decoration-front/back/etc</Form.Label>
                                    <Form.Control type="text" name="decoration_location" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="garmentType">
                            <Form.Label>Type of Garment (Polos, tees etc.)</Form.Label>
                            <Form.Control type="text" name="garment_type" />
                        </Form.Group>
                        <Form.Group controlId="orderDate">
                            <Form.Label>When Do You Need Your Order?</Form.Label>
                            <Form.Control type="text" name="order_date" />
                        </Form.Group>
                        <Form.Group controlId="comments">
                            <Form.Label>Additional Comments:</Form.Label>
                            <Form.Control as="textarea" rows={3} name="comments" />
                        </Form.Group>
                        <Form.Group controlId="file">
                            <Form.Label>Upload file (Max 2MB) (Format: gif, png, jpg, jpeg, pdf)</Form.Label>
                            <Form.Control type="file" name="file" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;
