'use client';

import { useState } from 'react';

const propertyTypes = [
  { id: 'apartment', name: 'Apartment' },
  { id: 'house', name: 'House' },
  { id: 'villa', name: 'Villa' },
  { id: 'plot', name: 'Plot' },
  { id: 'commercial', name: 'Commercial' },
];

const furnishingOptions = [
  { id: 'unfurnished', name: 'Unfurnished' },
  { id: 'semi-furnished', name: 'Semi-Furnished' },
  { id: 'fully-furnished', name: 'Fully Furnished' },
];

const constructionStatuses = [
  { id: 'ready-to-move', name: 'Ready to Move' },
  { id: 'under-construction', name: 'Under Construction' },
];

export default function PropertyPostForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    listingType: 'sell',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    areaUnit: 'sqft',
    price: '',
    title: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    furnishing: '',
    constructionStatus: '',
    amenities: {
      parking: false,
      garden: false,
      gym: false,
      swimmingPool: false,
      security: false,
      elevator: false,
      clubhouse: false,
      playground: false,
    },
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Property listing submitted successfully!');
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Post Your Property</h2>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div className={`text-sm ${step >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>Basic Details</div>
          <div className={`text-sm ${step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>Property Features</div>
          <div className={`text-sm ${step >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>Location & Contact</div>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
          <div 
            className="h-full bg-blue-600 rounded-full dark:bg-blue-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Details */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex space-x-4 mb-6">
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${
                  formData.listingType === 'sell'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setFormData({ ...formData, listingType: 'sell' })}
              >
                Sell
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${
                  formData.listingType === 'rent'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setFormData({ ...formData, listingType: 'rent' })}
              >
                Rent
              </button>
            </div>
            
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Property Type*
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bedrooms*
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.bedrooms}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bathrooms*
                </label>
                <select
                  id="bathrooms"
                  name="bathrooms"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.bathrooms}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              
              <div className="flex">
                <div className="flex-grow">
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Area*
                  </label>
                  <input
                    type="number"
                    id="area"
                    name="area"
                    required
                    placeholder="e.g. 1200"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-24">
                  <label htmlFor="areaUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Unit
                  </label>
                  <select
                    id="areaUnit"
                    name="areaUnit"
                    className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.areaUnit}
                    onChange={handleChange}
                  >
                    <option value="sqft">sq.ft</option>
                    <option value="sqm">sq.m</option>
                    <option value="acres">acres</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {formData.listingType === 'sell' ? 'Price*' : 'Monthly Rent*'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  placeholder="e.g. 450000"
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Property Features */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Property Title*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="e.g. Spacious 3BHK Apartment with Ocean View"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                placeholder="Describe your property in detail..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="furnishing" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Furnishing
                </label>
                <select
                  id="furnishing"
                  name="furnishing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.furnishing}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {furnishingOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="constructionStatus" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Construction Status
                </label>
                <select
                  id="constructionStatus"
                  name="constructionStatus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.constructionStatus}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {constructionStatuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="parking"
                    name="parking"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.parking}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="parking" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Parking
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="garden"
                    name="garden"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.garden}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="garden" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Garden
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="gym"
                    name="gym"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.gym}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="gym" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Gym
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="swimmingPool"
                    name="swimmingPool"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.swimmingPool}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="swimmingPool" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Swimming Pool
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="security"
                    name="security"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.security}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="security" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Security
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="elevator"
                    name="elevator"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.elevator}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="elevator" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Elevator
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="clubhouse"
                    name="clubhouse"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.clubhouse}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="clubhouse" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Clubhouse
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="playground"
                    name="playground"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
                    checked={formData.amenities.playground}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="playground" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Playground
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Location & Contact */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Address*
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Street address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  placeholder="State"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ZIP Code*
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  placeholder="ZIP Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.contactName}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.contactEmail}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    required
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.contactPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Listing
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
} 