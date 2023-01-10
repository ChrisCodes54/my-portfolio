import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
    return (
      <div id="projects">
      <Transitions>
     <h1 id="projectheader">This is a projects page</h1>
     <Card border="danger" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Transitions>
     </div>
    )
  }