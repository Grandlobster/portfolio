import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="dos-body">
      <div className="window">
        <div className="titlebar">WELCOME TO AADESH'S DOS PORTFOLIO</div>
        <h1>Hello, I'm Aadesh Lawande</h1>
        <p>📁 Developer | 📀 Retro Enthusiast | 📡 Web Explorer</p>
        <p className="fade-in">Feel the nostalgia? This is my old-school coding cave from the 90s.</p>
      </div>

      <div className="window">
        <div className="titlebar">PROJECTS.EXE</div>
        <ul>
          <li><a href="project1.html">💾 Project 1 - DOS Style Dashboard</a></li>
          <li><a href="project2.html">💾 Project 2 - ASCII Art Game</a></li>
          <li><a href="project3.html">💾 Project 3 - Terminal Portfolio</a></li>
        </ul>
      </div>

      <div className="window">
        <div className="titlebar">CONTACT.INI</div>
        <p>Email: <a href="mailto:aadeshlawande22@gmail.com">aadeshlawande22@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Grandlobster" target="_blank" rel="noopener noreferrer">github.com/Grandlobster</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aadesh-lawande/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aadesh-lawande</a></p>
        <p>Instagram: <a href="https://www.instagram.com/sonu.lawande/" target="_blank" rel="noopener noreferrer">@sonu.lawande</a></p>
        <p>Links Page: <a href="https://aadeshlawande.netlify.app/links.html" target="_blank" rel="noopener noreferrer">Netlify Links</a></p>
      </div>

      <div className="footer">
        <p>© 1997-2025 Aadesh Lawande's Terminal</p>
        <p>Rebooting Creativity... ██████████ 100%</p>
      </div>
    </div>
  );
}
