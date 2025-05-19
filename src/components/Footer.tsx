
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Our Story</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Leadership</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">cIV Platform</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Implementation</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Consulting</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Webinars</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">White Papers</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Support</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">LinkedIn</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
            <img 
              src="/cIV-Logo.png" 
              alt="xLM Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          
          <div className="mt-4 md:mt-0 text-sm opacity-75">
            &copy; {new Date().getFullYear()} cIV Platform. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
