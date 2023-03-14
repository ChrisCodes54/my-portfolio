import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dayplanner from '../../images/usingdayplanner.png';
import notetaker from '../../images/notetaker.png'
import techblog from '../../images/tech-blog-home.png'
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
  const cardData = [

    { id: 1, img: notetaker, title: 'Note Taker', text: "The note taker is an application that allows user to save their notes where it is stored in a database.", repo: 'https://github.com/ChrisCodes54/note-taker'},

    { id: 2, img: dayplanner, title: 'Day Planner', text: "A Day Planner which allows for users to locally save all the things they need to do throughout the average work day (9am-5pm.) It dynamically will update the time every minute as well as color code between Past, Present, and Future hours.", repo: 'https://github.com/ChrisCodes54/Day-Planner' },

    { id: 3, img: techblog, title: 'Tech-Blog', text: "A blog style site from front end to back end. Allowing users to create an account, post, comment, and see other people's comments.", repo:'https://github.com/ChrisCodes54/tech-blog' },

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