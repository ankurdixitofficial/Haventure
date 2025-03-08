'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGovtDropdownOpen, setIsGovtDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesDropdownOpen(false);
      setIsGovtDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close dropdowns when navigating
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsGovtDropdownOpen(false);
  }, [pathname]);

  const handleDropdownToggle = (e: React.MouseEvent, dropdown: 'services' | 'govt') => {
    e.stopPropagation();
    if (dropdown === 'services') {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
      setIsGovtDropdownOpen(false);
    } else {
      setIsGovtDropdownOpen(!isGovtDropdownOpen);
      setIsServicesDropdownOpen(false);
    }
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Haventure
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/properties" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/properties') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                }`}
              >
                Properties
              </Link>
              <div className="relative">
                <button
                  onClick={(e) => handleDropdownToggle(e, 'services')}
                  className={`px-3 py-2 text-sm font-medium flex items-center ${
                    pathname?.startsWith('/services') 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        All Services
                      </Link>
                      <Link
                        href="/services/home-loans"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Home Loans
                      </Link>
                      <Link
                        href="/services/legal"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Legal Services
                      </Link>
                      <Link
                        href="/services/packers-movers"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Packers & Movers
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/post-property" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/post-property') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                }`}
              >
                Post Property
              </Link>
              <div className="relative">
                <button
                  onClick={(e) => handleDropdownToggle(e, 'govt')}
                  className={`px-3 py-2 text-sm font-medium flex items-center ${
                    pathname?.startsWith('/government-real-estate') 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span className="flex items-center">
                    <svg 
                      className="mr-1 h-4 w-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                      />
                    </svg>
                    Government Data
                  </span>
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isGovtDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isGovtDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/government-real-estate"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        RERA Implementation Status
                      </Link>
                      <Link
                        href="/government-real-estate/about"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                        onClick={(e) => e.stopPropagation()}
                      >
                        About RERA
                      </Link>
                      <div className="border-t border-gray-100 dark:border-gray-700 my-1 px-4 py-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Government data provided by data.gov.in
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/contact" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/contact') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Register
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/properties" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/properties') 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Properties
            </Link>
            <div>
              <button
                onClick={(e) => handleDropdownToggle(e, 'services')}
                className={`w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname?.startsWith('/services') 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Services
                <svg
                  className={`h-5 w-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 pl-4 pr-2 space-y-1">
                  <Link 
                    href="/services" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/services/home-loans" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Home Loans
                  </Link>
                  <Link 
                    href="/services/legal" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Legal Services
                  </Link>
                  <Link 
                    href="/services/packers-movers" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Packers & Movers
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/post-property" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/post-property') 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Post Property
            </Link>
            <div>
              <button
                onClick={(e) => handleDropdownToggle(e, 'govt')}
                className={`w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname?.startsWith('/government-real-estate') 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <span className="flex items-center">
                  <svg 
                    className="mr-1 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                    />
                  </svg>
                  Government Data
                </span>
                <svg
                  className={`h-5 w-5 transition-transform ${isGovtDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isGovtDropdownOpen && (
                <div className="mt-2 pl-4 pr-2 space-y-1">
                  <Link 
                    href="/government-real-estate" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    RERA Implementation Status
                  </Link>
                  <Link 
                    href="/government-real-estate/about" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    About RERA
                  </Link>
                  <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
                    Government data provided by data.gov.in
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-white' 
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/login" 
                    className="block w-full px-4 py-2 text-center text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 