import React from "react";
import "../assets/css/home.css";
import Navbar from "../components/NavBar";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <br />
            <h1>Welcome to the student portal</h1>
            <div className="le">
            <p>we can provide courses . You can learn this valuable course and devlop your skills. Get certified by global certification bodies and deepen your expertise</p>
            </div>
            
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Student Portal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
