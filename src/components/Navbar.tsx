
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="font-bold text-2xl text-civ-darkblue">c<span className="text-civ-blue">IV</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#case-studies">Case Studies</NavLink>
            <Button asChild className="bg-civ-blue hover:bg-civ-darkblue text-white">
              <a href="#contact">Request a Demo</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-civ-blue font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default Navbar;
