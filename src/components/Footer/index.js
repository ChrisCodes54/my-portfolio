import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

import './style.css'

export default function Footer() {
    return (
        <footer id='footer'>
            <Container fluid >
                <Row>
                    <Col id='icons'>
                        <Linkedin color='white' id='linkedin' size={50} />

                        <Github color='white' id='github' size={50}  />

                    </Col>

                </Row>
            </Container>

        </footer>

    )
}