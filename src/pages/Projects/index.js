import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Transitions from "../transitions";
import './style.css'

export default function Projects() {
  const cardData = [
    
      { id: 1, Img: '"https://via.placeholder.com/150"', title: 'This is card 1', text: "" },
          { id: 2, Img: "https://via.placeholder.com/150", title: 'This is card 2' },
           { id: 3, Img: "https://via.placeholder.com/150", title: 'This is card 3' },
    
  ]
    return (
      <div id="projects">
      <Transitions>
     <h1 id="projectheader">This is a projects page</h1>

     {cardData.map((card) => (
     <Card key={card.id} border="danger" style={{ width: '18rem' }}>
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
      </Transitions>
     </div>
    )
  }

//   import { Card } from 'react-bootstrap';

  
// function MyCards(props) {
//   const cardData = [
//     { id: 1, title: 'Card 1', text: 'This is card 1' },
//     { id: 2, title: 'Card 2', text: 'This is card 2' },
//     { id: 3, title: 'Card 3', text: 'This is card 3' },
//   ];

//   return (
//     <div>
//       {cardData.map((card) => (
//         <Card key={card.id}>
//           <Card.Header>{card.title}</Card.Header>
//           <Card.Body>
//             <Card.Text>{card.text}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }
