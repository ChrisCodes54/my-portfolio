import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
  const cardData = [

    { id: 1, Img: '"https://via.placeholder.com/150"', title: 'Note Taker', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", repo:'https://github.com/ChrisCodes54/note-taker', deployment:"" },

    { id: 2, Img: "https://via.placeholder.com/150", title: 'Day Planner', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", repo:'https://github.com/ChrisCodes54/Day-Planner', deployment:""  },

    { id: 3, Img: "https://via.placeholder.com/150", title: 'This is card 3', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },

  ]
  return (
    <div id="projects">
      <Transitions>
        <h1 id="projectheader">Projects</h1>

        <div className="card-container">
          {cardData.map((card) => (
            <Card key={card.id} border="danger" style={{ width: '25rem' }} className="card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body id="card-body">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button href={card.repo} target="_blank" id="card-buttons" variant="primary">Repo</Button>
                <Button id="card-buttons" variant="danger">Deployment</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

      </Transitions>
    </div>
  )
}