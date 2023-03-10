import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dayplanner from '../../images/usingdayplanner.png';
import notetaker from '../../images/notetaker.png'
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
  const cardData = [

    { id: 1, img: notetaker, title: 'Note Taker', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", repo: 'https://github.com/ChrisCodes54/note-taker'},

    { id: 2, img: dayplanner, title: 'Day Planner', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", repo: 'https://github.com/ChrisCodes54/Day-Planner' },

    { id: 3, img: "https://placehold.jp/3d4070/ffffff/200x150.png", title: 'Tech-Blog', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", repo:'https://github.com/ChrisCodes54/tech-blog' },

  ]
  return (
    <Container fluid>
      <div id="projects">
        <Transitions>
          <h1 id="projectheader">Projects</h1>

          <Row md={12}>

            <div className="card-container">
              {cardData.map((card) => (
                <Card key={card.id} border="dark" style={{ width: '25rem' }} className="card">
                  <Card.Img variant="top" src={card.img} alt='project screenshot' className="cardImage"/>
                  <Card.Body id="card-body">
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Button href={card.repo} target="_blank" id="card-buttons" variant="primary">Repo</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Row>
        </Transitions>
      </div>
    </Container>
  )
}