import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedProperties from '../components/FeaturedProperties';
import AdvancedSearch from '../components/AdvancedSearch';
import PropertyServices from '../components/PropertyServices';
import EMICalculator from '../components/EMICalculator';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-opacity-70"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find Your Dream Home
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-xl text-gray-200">
                Discover the perfect property with Haventure. We help you find the ideal home that matches your lifestyle and preferences.
              </p>
            </div>
            
            <div className="mt-10">
              <AdvancedSearch />
            </div>
          </div>
        </section>
        
        {/* Featured Properties Section */}
        <FeaturedProperties />
        
        {/* Property Services Section */}
        <PropertyServices />
        
        {/* Post Property CTA */}
        <section className="bg-blue-600 py-12 dark:bg-blue-800 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Want to Sell or Rent Your Property?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  List your property on Haventure and reach thousands of potential buyers and tenants. Our platform makes it easy to showcase your property and connect with interested parties.
                </p>
                <div className="mt-8">
                  <Link
                    href="/post-property"
                    className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    Post Your Property
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="aspect-w-16 aspect-h-9 rounded-lg bg-blue-500 p-8">
                  <div className="flex flex-col items-center justify-center text-white">
                    <div className="text-5xl font-bold">FREE</div>
                    <div className="mt-2 text-xl">Property Listing</div>
                    <div className="mt-4 text-center text-blue-100">
                      <p>No hidden charges</p>
                      <p>Reach thousands of buyers</p>
                      <p>Get genuine leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* EMI Calculator Section */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Home Loan EMI Calculator
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
                Plan your finances with our easy-to-use EMI calculator
              </p>
            </div>
            
            <EMICalculator />
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="bg-white py-12 dark:bg-gray-800 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Why Choose Haventure?
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                We're committed to helping you find the perfect property with a seamless experience.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Advanced Search</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Find exactly what you're looking for with our powerful search and filtering options.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Secure Transactions</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Your security is our priority. All transactions are protected with the latest security measures.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Expert Agents</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Our team of experienced real estate professionals is here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
