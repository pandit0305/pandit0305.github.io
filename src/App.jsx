import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Stats from "./components/github/Stats";
import {Box} from '@mui/material'
import './App.css';



function App() {
  return (
    <Box className="App">
      <Navbar />
      <Box id="whole-item">
        <Home />
        <About />
        <Experience />
        <Stats />
        <Contact />
        <Footer />
      </Box>
    
    </Box>
  );
}

export default App;
