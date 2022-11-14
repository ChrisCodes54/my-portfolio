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
                    <Col id='icon'>
                        <Linkedin color='white' />

                        <Github color='white' />

                    </Col>

                </Row>
            </Container>

        </footer>

    )
}