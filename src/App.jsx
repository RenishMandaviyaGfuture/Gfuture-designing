import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Solution from './pages/Solution.jsx';
import Industries from './pages/Industries.jsx';
import bgImage from './assets/Rectangle.png'; 
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#010001',
      }}
    >
      <Router>
        <Navbar className="fixed top-0 left-0 w-full " />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/solution' element={<Solution />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App