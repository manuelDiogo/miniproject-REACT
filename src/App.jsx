import { useState } from 'react'

import "./components/Footer.jsx";
import Footer from "./components/Footer.jsx";

import "./components/Navbar.jsx";
import Navbar from "./components/Navbar.jsx";

import "./components/Sidebar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import List from './components/List.jsx';



//import './App.css';

function App() {

  return (
    <div className='App'>
      <Sidebar />
      
      <Navbar />
      
      <List  />
      
      <Footer />
    </div>
  )
}

export default App