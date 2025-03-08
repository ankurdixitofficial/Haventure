'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PropertySearchParams } from '../services/api';

const propertyTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'apartment', name: 'Apartment' },
  { id: 'house', name: 'House' },
  { id: 'villa', name: 'Villa' },
  { id: 'plot', name: 'Plot' },
  { id: 'commercial', name: 'Commercial' },
];

const budgetRanges = [
  { id: 'any', name: 'Any Budget' },
  { id: '0-500000', name: 'Under $500,000' },
  { id: '500000-1000000', name: '$500,000 - $1,000,000' },
  { id: '1000000-2000000', name: '$1,000,000 - $2,000,000' },
  { id: '2000000-5000000', name: '$2,000,000 - $5,000,000' },
  { id: '5000000-plus', name: 'Above $5,000,000' },
];

const bedroomOptions = [
  { id: 'any', name: 'Any' },
  { id: '1', name: '1' },
  { id: '2', name: '2' },
  { id: '3', name: '3' },
  { id: '4', name: '4+' },
];

export default function AdvancedSearch() {
  const router = useRouter();
  const [searchType, setSearchType] = useState('buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [budget, setBudget] = useState('any');
  const [bedrooms, setBedrooms] = useState('any');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [furnishing, setFurnishing] = useState('any');
  const [constructionStatus, setConstructionStatus] = useState('any');
  const [postedBy, setPostedBy] = useState('any');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build search params for API
    const searchParams: PropertySearchParams = {
      listingType: searchType,
    };
    
    // Add optional parameters if they're set
    if (location) searchParams.location = location;
    
    if (propertyType !== 'all') searchParams.propertyType = propertyType;
    
    if (budget !== 'any') {
      const [minPrice, maxPrice] = budget.split('-');
      if (minPrice) searchParams.minPrice = parseInt(minPrice);
      if (maxPrice) searchParams.maxPrice = parseInt(maxPrice);
      
      // Handle the "above X" case
      if (budget === '5000000-plus') {
        searchParams.minPrice = 5000000;
        delete searchParams.maxPrice;
      }
    }
    
    if (bedrooms !== 'any') searchParams.bedrooms = parseInt(bedrooms);
    
    if (furnishing !== 'any') searchParams.furnishing = furnishing;
    
    if (constructionStatus !== 'any') searchParams.constructionStatus = constructionStatus;
    
    if (postedBy !== 'any') searchParams.postedBy = postedBy;
    
    // Convert search params to URL query string
    const queryString = new URLSearchParams();
    
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) {
        queryString.append(key, value.toString());
      }
    });
    
    // Navigate to properties page with search params
    router.push(`/properties?${queryString.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            searchType === 'buy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSearchType('buy')}
        >
          Buy
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            searchType === 'rent'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSearchType('rent')}
        >
          Rent
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            searchType === 'sell'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSearchType('sell')}
        >
          Sell
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter city, locality or project"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {propertyTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Budget
            </label>
            <select
              id="budget"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              {budgetRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              {bedroomOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isAdvancedOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="furnishing" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Furnishing
              </label>
              <select
                id="furnishing"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={furnishing}
                onChange={(e) => setFurnishing(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="furnished">Furnished</option>
                <option value="semi-furnished">Semi-Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>

            <div>
              <label htmlFor="construction-status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Construction Status
              </label>
              <select
                id="construction-status"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={constructionStatus}
                onChange={(e) => setConstructionStatus(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="ready-to-move">Ready to Move</option>
                <option value="under-construction">Under Construction</option>
              </select>
            </div>

            <div>
              <label htmlFor="posted-by" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Posted By
              </label>
              <select
                id="posted-by"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={postedBy}
                onChange={(e) => setPostedBy(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="owner">Owner</option>
                <option value="agent">Agent</option>
                <option value="builder">Builder</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          >
            {isAdvancedOpen ? 'Hide Advanced Options' : 'Show Advanced Options'}
          </button>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
} 