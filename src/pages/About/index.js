import React from "react";
import pc from '../../images/profile-picture.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Transitions from "../transitions";
import './style.css'

export default function About() {
	return (
		<main id="main-aboutme">
			
		<Transitions>
			<Container fluid id='aboutme-container'>
				
				<Row>
					<Col id="picture-column">
						<img src={pc} alt="Christopher Tangarife" id="profile-picture" />
					</Col>
					<Col id='aboutmetext-column'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam mattis leo gravida, dapibus lorem non, facilisis
						ligula. Donec malesuada nunc nec consectetur varius. Fusce
						rhoncus ultrices leo et eleifend. Cras nunc ligula,
						imperdiet sed ipsum sed, fringilla accumsan ante. Praesent
						porta ante varius, tincidunt enim hendrerit, ornare leo.
						Cras sodales diam nibh, vel tempus dolor egestas id.
						Curabitur sem erat, porttitor quis nibh in, porta molestie
						nibh. Vestibulum auctor ipsum lacus, vitae fermentum enim
						aliquam a. Duis aliquet ac orci sed mattis. Cras nec elit
						vitae eros viverra elementum. Nam vestibulum quam a nisi
						imperdiet porttitor. Praesent suscipit ac mi eget egestas.
						Curabitur eget mollis orci, convallis condimentum nisi.
						Etiam efficitur, diam id iaculis fermentum, metus dolor
						ultricies metus, maximus porta magna mauris non felis. Orci
						varius natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus.Duis aliquet ac orci sed mattis. Cras
						nec elit vitae eros viverra elementum. Nam vestibulum quam a
						nisi imperdiet porttitor. Praesent suscipit ac mi eget
						egestas. Curabitur eget mollis orci, convallis condimentum
						nisi. Etiam efficitur, diam id iaculis fermentum, metus
						dolor ultricies metus, maximus porta magna mauris non felis.
						Orci varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus.
					</Col>
				</Row>
			</Container>

		</Transitions>
</main>
	)
}