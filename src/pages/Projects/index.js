import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
  const cardData = [

    { id: 1, Img: '"https://via.placeholder.com/150"', title: 'Tech Blog', text: "" },
    { id: 2, Img: "https://via.placeholder.com/150", title: 'This is card 2' },
    { id: 3, Img: "https://via.placeholder.com/150", title: 'This is card 3' },

  ]
  return (
    <div id="projects">
      <Transitions>
        <h1 id="projectheader">This is a projects page</h1>

        <div className="card-container">
          {cardData.map((card) => (
            <Card key={card.id} border="danger" style={{ width: '25rem'}} className="card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

      </Transitions>
    </div>
  )
}