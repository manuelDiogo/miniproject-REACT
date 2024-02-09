import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import List from './components/List.jsx';
import About from "./pages/About.jsx"

//import './App.css';

function App() {

  return (
    <div className='App'>

      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App