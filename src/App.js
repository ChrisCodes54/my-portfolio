import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				
				<Header />
				<main>


					<Routes>

						<Route exact path="/" element={<About />} />
						<Route exact path="/projects" element={<Projects />} />
						<Route exact path="/contact" element={<Contact />} />

					</Routes>


				</main>

				<Footer />

			</Router>
		</>
	);
}

export default App;