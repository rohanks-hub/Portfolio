import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';  
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

