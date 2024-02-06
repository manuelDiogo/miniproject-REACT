import { useState } from 'react'

import "./components/Footer.jsx";
import Footer from "./components/Footer.jsx";

import "./components/Navbar.jsx";
import Navbar from "./components/Navbar.jsx";

import "./components/Sidebar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import './App.css';

function App() {

  return (
    <div className='App'>
      <Navbar element = {{ appName: "qualquer coisa", appLogo: "https://pen-online.com/fr/wp-content/uploads/2021/09/24111321/%C2%A9-Studio-Ghibli-4-1024x554.jpg" }} />

      <Footer element = {{linkGit: "https://github.com/manuelDiogo/miniproject-REACT"}} />

      <Sidebar element = {{linkHome: "" , linkAbout: ""}} />
    </div>
  )
}

export default App
