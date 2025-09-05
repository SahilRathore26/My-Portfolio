import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Mail, Linkedin, Github, Code } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* ✅ Full page responsive container */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 min-h-screen text-gray-900 flex flex-col">
        {/* Navbar always on top */}
        <Navbar />

        {/* ✅ Main content with proper padding for mobile & desktop */}
        <main className="flex-1 px-4 sm:px-6 lg:px-12 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
