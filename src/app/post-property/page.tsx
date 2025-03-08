'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PropertyPostForm from '../../components/PropertyPostForm';

export default function PostPropertyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Post Your Property</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              List your property on Haventure and connect with potential buyers or tenants
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Property Post Form */}
            <div className="lg:col-span-2">
              <PropertyPostForm />
            </div>

            {/* Sidebar */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Why Post with Us?</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-base text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Free Listing</span> - Post your property at no cost
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-base text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Wide Reach</span> - Connect with thousands of potential buyers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-base text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Quality Leads</span> - Get genuine inquiries from interested parties
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-base text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Easy Management</span> - Update your listing anytime
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-blue-600 p-6 shadow dark:bg-blue-800">
                <h2 className="text-xl font-semibold text-white">Need Help?</h2>
                <p className="mt-2 text-blue-100">
                  Our team is here to assist you with your property listing. Contact us for any questions or support.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-white">
                    <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-2">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-white">
                    <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-2">support@haventure.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 