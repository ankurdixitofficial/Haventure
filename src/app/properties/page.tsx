'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PropertyCard from '../../components/PropertyCard';
import { fetchProperties, Property, PropertySearchParams } from '../../services/api';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [propertyType, setPropertyType] = useState<string>('');
  const [listingType, setListingType] = useState<string>('');

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      
      try {
        // Build search params from URL query params
        const apiParams: PropertySearchParams = {};
        
        // Get search parameters from URL
        const location = searchParams.get('location');
        const propertyTypeParam = searchParams.get('propertyType');
        const minPriceParam = searchParams.get('minPrice');
        const maxPriceParam = searchParams.get('maxPrice');
        const bedroomsParam = searchParams.get('bedrooms');
        const listingTypeParam = searchParams.get('listingType');
        const furnishingParam = searchParams.get('furnishing');
        const constructionStatusParam = searchParams.get('constructionStatus');
        const postedByParam = searchParams.get('postedBy');
        
        // Set filter states from URL params
        if (location) {
          apiParams.location = location;
          setSearchQuery(location);
        }
        
        if (propertyTypeParam) {
          apiParams.propertyType = propertyTypeParam;
          setPropertyType(propertyTypeParam);
        }
        
        if (minPriceParam) {
          const minPrice = parseInt(minPriceParam);
          apiParams.minPrice = minPrice;
          setPriceRange([minPrice, priceRange[1]]);
        }
        
        if (maxPriceParam) {
          const maxPrice = parseInt(maxPriceParam);
          apiParams.maxPrice = maxPrice;
          setPriceRange([priceRange[0], maxPrice]);
        }
        
        if (bedroomsParam) {
          const bedroomsValue = parseInt(bedroomsParam);
          apiParams.bedrooms = bedroomsValue;
          setBedrooms(bedroomsValue);
        }
        
        if (listingTypeParam) {
          apiParams.listingType = listingTypeParam;
          setListingType(listingTypeParam);
        }
        
        if (furnishingParam) {
          apiParams.furnishing = furnishingParam;
        }
        
        if (constructionStatusParam) {
          apiParams.constructionStatus = constructionStatusParam;
        }
        
        if (postedByParam) {
          apiParams.postedBy = postedByParam;
        }
        
        // Fetch properties with search params
        const response = await fetchProperties(apiParams);
        
        if (response.success) {
          setProperties(response.data);
        } else {
          setError(response.error || 'Failed to fetch properties');
        }
      } catch (err) {
        setError('An unexpected error occurred');
        console.error('Error loading properties:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [searchParams]);

  // Fallback data in case API fails or returns empty
  const allProperties = [
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
    {
      id: '5',
      title: 'Beachfront Condo',
      price: 620000,
      location: 'San Diego, CA',
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      imageUrl: '#50E3C2', // Teal
    },
    {
      id: '6',
      title: 'Mountain Retreat Cabin',
      price: 375000,
      location: 'Denver, CO',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      imageUrl: '#9013FE', // Purple
    },
    {
      id: '7',
      title: 'Historic Brownstone',
      price: 1100000,
      location: 'Boston, MA',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      imageUrl: '#F8E71C', // Yellow
    },
    {
      id: '8',
      title: 'Modern Townhouse',
      price: 480000,
      location: 'Seattle, WA',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 1950,
      imageUrl: '#D0021B', // Red
    },
  ];

  // Use fallback data if API fails or returns empty
  const displayProperties = properties.length > 0 ? properties : allProperties;

  // Filter properties based on search criteria
  const filteredProperties = displayProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    const matchesBedrooms = bedrooms === null || property.bedrooms === bedrooms;
    
    const matchesPropertyType = !propertyType || property.propertyType === propertyType;
    
    const matchesListingType = !listingType || property.listingType === listingType;
    
    return matchesSearch && matchesPrice && matchesBedrooms && matchesPropertyType && matchesListingType;
  });

  const handleFilterChange = () => {
    // This would typically update URL params and trigger a new API fetch
    // For now, we're just filtering the existing data client-side
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Properties</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Find your perfect property from our extensive listings
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters */}
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h2>
              <div className="mt-4">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Location or property name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price Range
                </label>
                <div className="mt-1 grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    id="min-price"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  />
                  <input
                    type="number"
                    id="max-price"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000000])}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={bedrooms === null ? '' : bedrooms}
                  onChange={(e) => setBedrooms(e.target.value === '' ? null : parseInt(e.target.value))}
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Any</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="listing-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Listing Type
                </label>
                <select
                  id="listing-type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={listingType}
                  onChange={(e) => setListingType(e.target.value)}
                >
                  <option value="">Any</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>

              <button
                className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleFilterChange}
              >
                Apply Filters
              </button>
            </div>

            {/* Property listings */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex h-64 items-center justify-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="rounded-lg bg-red-50 p-6 text-center text-red-800 dark:bg-red-900 dark:text-red-200">
                  {error}
                </div>
              ) : filteredProperties.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProperties.map((property) => (
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
              ) : (
                <div className="rounded-lg bg-white p-6 text-center shadow dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">No properties match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 