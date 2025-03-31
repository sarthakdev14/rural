import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHeartbeat } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaHeartbeat className="text-blue-600 text-3xl" />
            <span className="text-2xl font-bold text-blue-600">RuralCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
            <Link to="/telemedicine" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Telemedicine</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Resources</Link>
            <Link to="/emergency" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">Emergency</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/telemedicine" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Telemedicine
              </Link>
              <Link 
                to="/resources" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/emergency" 
                className="block px-3 py-2 bg-red-600 text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Emergency
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;