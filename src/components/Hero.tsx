'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-80"></div>
        <div className="absolute inset-0">
          {/* Use a solid color as a placeholder for the hero background */}
          <div className="h-full w-full bg-gradient-to-r from-blue-800 to-indigo-900"></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Home
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-300">
          Discover the perfect property with Haventure. We help you find the ideal home that matches your lifestyle and preferences.
        </p>
        <div className="mt-10">
          <form onSubmit={handleSearch} className="sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="search" className="sr-only">
                Search properties
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by location, property type, or features..."
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-4 py-3 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white">
            <span className="flex items-center">
              <svg className="mr-1.5 h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Verified Properties
            </span>
            <span className="flex items-center">
              <svg className="mr-1.5 h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Expert Guidance
            </span>
            <span className="flex items-center">
              <svg className="mr-1.5 h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Secure Transactions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 