import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import List from './components/List.jsx';
import About from "./pages/About.jsx"
import Homepage from "./components/Homepage.jsx";
import Steps from "./pages/Steps.jsx";
import Oops from "./pages/Oops.jsx"

function App() {
  return (
    <div className='App'>
      <Router> 
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element ={<Homepage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/yes" element={<List/>} />
        <Route path="/yes/:id" element={<Steps/>} />
        <Route path="*" element={<Oops/>} />
      </Routes>
      </Router> 
      <Footer />
    </div>
  )
}

export default App