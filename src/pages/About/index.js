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

					<Row  id="rows">
						<Col xxl={6} lg={12} id="picture-column">
							<img src={pc} alt="Christopher Tangarife" id="profile-picture" />
						</Col>
						<Col xxl={6} lg={12} id='aboutme-column'>
							<p id="aboutme-text">My name is Christopher Tangarife and I am a Full Stack Developer Boot camp Graduate from New Jersey. Since I was a kid I was always interested in the small details of how and why things work the way they do. I enjoyed building different types of things from as small as Legos to computers which has followed me into my adulthood. One of my greatest assets is my desire to constantly ask questions about things I’m unfamiliar with. There is always something new to learn or more personally, there is always a bug that can be fixed. I have an unexplainable drive to constantly push myself to be better, push forward, and when possible help others.<br/><br/>
								Taking the Rutgers Coding Boot camp was a key decision in my career in order to continue to learn new technologies and master my new found craft. During the boot camp I learned HTML, CSS, and Javascript. I completed projects and coursework that incorporated a number of new technologies such as NoSQL, GitHub, MongoDB, Express, React, NodeJS, Jquery, Bootstrap, MySQL, and GIT. I also learned about REST APIs, even having it as a requirement for myself in all my projects. I’m hoping to bring my experience and knowledge forward within my career as I continue to learn and grow.
							</p>
						</Col>
					</Row>
				</Container>

			</Transitions>
		</main>
	)
}