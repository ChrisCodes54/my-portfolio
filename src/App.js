import React from "react";

import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div style={{
            backgroundColor: "#DDD0C8",
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>


            <Header />
            <div>

                <About/>
                <Projects/>
                <Contact/>

            </div>

            <Footer />


        </div>
    );
}

export default App;