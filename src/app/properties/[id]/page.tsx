'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Mock data for properties
const properties = [
  {
    id: '1',
    title: 'Modern Apartment with Ocean View',
    price: 450000,
    location: 'Miami, FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: 'This stunning modern apartment offers breathtaking ocean views from every room. Features include floor-to-ceiling windows, an open concept living area, gourmet kitchen with high-end appliances, and a spacious balcony perfect for entertaining. The building offers amenities such as a pool, fitness center, and 24-hour security.',
    features: [
      'Ocean view',
      'Floor-to-ceiling windows',
      'Gourmet kitchen',
      'Spacious balcony',
      'Pool access',
      'Fitness center',
      '24-hour security',
      'Parking space'
    ],
    images: [
      '#4A90E2', // Blue
      '#50E3C2', // Teal
      '#F5A623', // Orange
      '#D0021B', // Red
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '(305) 555-1234',
      email: 'sarah.johnson@haventure.com',
      image: '#4A90E2' // Blue
    }
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    price: 1250000,
    location: 'Los Angeles, CA',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    description: 'Exquisite luxury villa in a prestigious neighborhood. This property features a grand entrance, high ceilings, custom finishes throughout, and a chef\'s kitchen with top-of-the-line appliances. The backyard oasis includes a sparkling pool, spa, and outdoor kitchen perfect for entertaining. Additional amenities include a home theater, wine cellar, and smart home technology.',
    features: [
      'Swimming pool',
      'Spa',
      'Outdoor kitchen',
      'Home theater',
      'Wine cellar',
      'Smart home technology',
      'Custom finishes',
      'Landscaped garden'
    ],
    images: [
      '#7ED321', // Green
      '#BD10E0', // Purple
      '#F8E71C', // Yellow
      '#9013FE', // Violet
    ],
    agent: {
      name: 'Michael Chen',
      phone: '(213) 555-5678',
      email: 'michael.chen@haventure.com',
      image: '#7ED321' // Green
    }
  },
  {
    id: '3',
    title: 'Cozy Downtown Loft',
    price: 320000,
    location: 'New York, NY',
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    description: 'Charming loft in the heart of downtown. This stylish space features exposed brick walls, high ceilings with original beams, and large windows that flood the space with natural light. The open floor plan includes a modern kitchen with stainless steel appliances, a comfortable living area, and a sleeping space. Building amenities include a rooftop terrace and secure entry.',
    features: [
      'Exposed brick walls',
      'High ceilings',
      'Original beams',
      'Large windows',
      'Stainless steel appliances',
      'Rooftop terrace access',
      'Secure entry',
      'Central location'
    ],
    images: [
      '#F5A623', // Orange
      '#D0021B', // Red
      '#4A90E2', // Blue
      '#50E3C2', // Teal
    ],
    agent: {
      name: 'Jessica Martinez',
      phone: '(212) 555-9012',
      email: 'jessica.martinez@haventure.com',
      image: '#F5A623' // Orange
    }
  },
  {
    id: '4',
    title: 'Suburban Family Home',
    price: 550000,
    location: 'Austin, TX',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2100,
    description: 'Perfect family home in a desirable suburban neighborhood. This well-maintained property features an open concept main floor, updated kitchen with granite countertops, spacious bedrooms, and a finished basement. The fenced backyard includes a deck, garden area, and play space. Located in an excellent school district with easy access to parks, shopping, and major highways.',
    features: [
      'Open concept layout',
      'Updated kitchen',
      'Granite countertops',
      'Finished basement',
      'Fenced backyard',
      'Deck',
      'Garden area',
      'Excellent school district'
    ],
    images: [
      '#BD10E0', // Purple
      '#F8E71C', // Yellow
      '#9013FE', // Violet
      '#7ED321', // Green
    ],
    agent: {
      name: 'David Wilson',
      phone: '(512) 555-3456',
      email: 'david.wilson@haventure.com',
      image: '#BD10E0' // Purple
    }
  },
];

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = properties.find(p => p.id === propertyId) || properties[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${property.title} in ${property.location}.`
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Your message has been sent! The agent will contact you soon.');
    setIsContactFormOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Property images and details */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-64 w-full sm:h-96">
                  {/* Use a colored div as a placeholder instead of an image */}
                  <div 
                    className="h-full w-full"
                    style={{ backgroundColor: property.images[activeImage] }}
                  ></div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {property.images.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative h-20 overflow-hidden rounded-md ${
                        activeImage === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      {/* Use a colored div as a placeholder instead of an image */}
                      <div 
                        className="h-full w-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{property.title}</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{property.location}</p>
                <p className="mt-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${property.price.toLocaleString()}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Description</h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{property.description}</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Features</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg
                          className="mr-2 h-5 w-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Agent information and contact form */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Agent</h2>
                <div className="mt-4 flex items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    {/* Use a colored div as a placeholder instead of an image */}
                    <div 
                      className="h-full w-full"
                      style={{ backgroundColor: property.agent.image }}
                    ></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{property.agent.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Licensed Real Estate Agent</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                <button
                  className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Contact Agent
                </button>
              </div>

              {/* Schedule a viewing card */}
              <div className="mt-6 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Schedule a Viewing</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Want to see this property in person? Schedule a viewing with the agent.
                </p>
                <button
                  className="mt-4 w-full rounded-md border border-blue-600 bg-white px-4 py-2 text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-500 dark:bg-transparent dark:text-blue-500 dark:hover:bg-blue-900"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form modal */}
        {isContactFormOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div>
              </div>
              <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                &#8203;
              </span>
              <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400"
                    onClick={() => setIsContactFormOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact Agent
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Fill out the form below and {property.agent.name} will get back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 