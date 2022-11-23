import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main>
				<About />
			</main>
			<Footer />
		</>
	);
}

export default App;