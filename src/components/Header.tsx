import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-green-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">D&G Footprints</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/walks" className="text-white hover:text-green-200 transition-colors">
              Walks
            </Link>
            <Link href="/events" className="text-white hover:text-green-200 transition-colors">
              Events
            </Link>
            <Link href="/dining" className="text-white hover:text-green-200 transition-colors">
              Dining
            </Link>
            <Link href="/accommodation" className="text-white hover:text-green-200 transition-colors">
              Stay
            </Link>
            <Link 
              href="/signup" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-2 pt-2 pb-4 space-y-2">
            <Link 
              href="/walks" 
              className="block text-white hover:text-green-200 transition-colors py-2"
            >
              Walks
            </Link>
            <Link 
              href="/events" 
              className="block text-white hover:text-green-200 transition-colors py-2"
            >
              Events
            </Link>
            <Link 
              href="/dining" 
              className="block text-white hover:text-green-200 transition-colors py-2"
            >
              Dining
            </Link>
            <Link 
              href="/accommodation" 
              className="block text-white hover:text-green-200 transition-colors py-2"
            >
              Stay
            </Link>
            <Link 
              href="/signup" 
              className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors w-full text-center mt-4"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 