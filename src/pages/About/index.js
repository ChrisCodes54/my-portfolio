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

			<h1 id="aboutme-header">About Me</h1>

			<Transitions>
				<Container fluid id='aboutme-container'>

					<Row id="rows">
						<Col id="picture-column">
							<img src={pc} alt="Christopher Tangarife" id="profile-picture" />
						</Col>
						<Col id='aboutme-column'>
							<p id="aboutme-text">Hello and welcome to my Portfolio! My name is Christopher Tangarife and I am a Full Stack Developer Bootcamp Graduate. I am a New Jersey native born and raised, since I was a kid I was always interested in the small details of how things works and why they work. I enjoyed building different types of things from as small as Legos to computers and this has followed me into my adulthood. What one of the greatest gifts we all have is the ability to learn and to adpat, this is what gets me out of bed everyday. That there is always something new to learn or more personally there is always a bug that can be fixed. I have an unexplainable drive to constantly push myself to be better, to push forward, and when possible to help others.</p>
						</Col>
					</Row>
				</Container>

			</Transitions>
		</main>
	)
}