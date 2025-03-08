'use client';

import { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { fetchProperties, Property } from '../services/api';

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeaturedProperties = async () => {
      setLoading(true);
      try {
        // Fetch featured properties (limit to 4)
        const response = await fetchProperties({ limit: 4 });
        
        if (response.success) {
          setProperties(response.data);
        } else {
          setError(response.error || 'Failed to fetch properties');
        }
      } catch (err) {
        setError('An unexpected error occurred');
        console.error('Error loading featured properties:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProperties();
  }, []);

  // Fallback data in case API fails or returns empty
  const fallbackProperties = [
    {
      id: '1',
      title: 'Modern Apartment with Ocean View',
      price: 450000,
      location: 'Miami, FL',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      imageUrl: '#4A90E2', // Blue
    },
    {
      id: '2',
      title: 'Luxury Villa with Pool',
      price: 1250000,
      location: 'Los Angeles, CA',
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3200,
      imageUrl: '#7ED321', // Green
    },
    {
      id: '3',
      title: 'Cozy Downtown Loft',
      price: 320000,
      location: 'New York, NY',
      bedrooms: 1,
      bathrooms: 1,
      area: 850,
      imageUrl: '#F5A623', // Orange
    },
    {
      id: '4',
      title: 'Suburban Family Home',
      price: 550000,
      location: 'Austin, TX',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 2100,
      imageUrl: '#BD10E0', // Purple
    },
  ];

  // Use fallback data if API fails or returns empty
  const displayProperties = properties.length > 0 ? properties : fallbackProperties;

  return (
    <section className="bg-white py-12 dark:bg-gray-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Discover our handpicked selection of premium properties
          </p>
        </div>
        
        {loading ? (
          <div className="mt-12 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="mt-12 rounded-lg bg-red-50 p-4 text-center text-red-800 dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {displayProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                id={property.id}
                title={property.title}
                price={property.price}
                location={property.location}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                imageUrl={property.images?.[0] || '#4A90E2'} // Use first image or fallback color
              />
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <a
            href="/properties"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 -mr-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 