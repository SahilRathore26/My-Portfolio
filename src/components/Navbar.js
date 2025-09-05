import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react OR switch to react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-white">
          <span className="text-yellow-300">Sahil</span>{" "}
          <span className="text-green-300">Rathore</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/skills" className="hover:text-yellow-300">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-yellow-300">
            Projects
          </Link>
          <Link to="/achievements" className="hover:text-yellow-300">
            Achievements
          </Link>
          <Link to="/education" className="hover:text-yellow-300">
            Education
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 px-6 py-4 space-y-3 text-white font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Projects
          </Link>
          <Link
            to="/achievements"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Achievements
          </Link>
          <Link
            to="/education"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Education
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
