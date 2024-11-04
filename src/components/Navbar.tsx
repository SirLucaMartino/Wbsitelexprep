import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-[#ff951c]" />
              <span className="ml-2 text-2xl font-bold text-gray-900">LexPrep</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#ff951c] px-3 py-2 rounded-md text-sm font-medium">
                Características
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#ff951c] px-3 py-2 rounded-md text-sm font-medium">
                Servicios
              </a>
              <a href="#blog" className="text-gray-700 hover:text-[#ff951c] px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#ff951c] px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="hidden md:block bg-[#ff951c] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e68718] transition-colors">
              Acceder
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-[#ff951c] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff951c]"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            className="text-gray-700 hover:text-[#ff951c] block px-3 py-2 rounded-md text-base font-medium"
          >
            Características
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#ff951c] block px-3 py-2 rounded-md text-base font-medium"
          >
            Servicios
          </a>
          <a
            href="#blog"
            className="text-gray-700 hover:text-[#ff951c] block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#ff951c] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </a>
          <button className="w-full mt-4 bg-[#ff951c] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e68718] transition-colors">
            Acceder
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;