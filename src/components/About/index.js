import React from "react";
// import pc from '../../images/profile-picture.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

export default function About() {
    return(
        <Container fluid id="border">
      <Row id="border">
        <Col id='col'>Check Mic</Col>
        <Col id="col">Check Mic part 2</Col>
      </Row>
    </Container>
    )
}