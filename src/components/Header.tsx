import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Officers',
    path: '/board-members'
  }, {
    name: 'Resources',
    path: '/resources'
  }, {
    name: 'News',
    path: '/news'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#BF5700] text-xl font-bold">
          ChE Advisory Board
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => <Link key={item.name} to={item.path} className={`text-gray-700 hover:text-[#BF5700] transition-colors ${location.pathname === item.path ? 'text-[#BF5700] font-medium' : ''}`}>
              {item.name}
            </Link>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-gray-700 hover:text-[#BF5700] transition-colors ${location.pathname === item.path ? 'text-[#BF5700] font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;