import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PropertyServices from '../../components/PropertyServices';
import EMICalculator from '../../components/EMICalculator';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Property Services</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Comprehensive services to make your real estate journey smooth and hassle-free
            </p>
          </div>
        </div>

        <div className="py-12">
          <PropertyServices />
        </div>

        <section className="bg-white py-12 dark:bg-gray-800 sm:py-16 lg:py-20">
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

        <section className="bg-blue-600 py-12 dark:bg-blue-800 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need Personalized Assistance?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Our team of real estate experts is ready to help you with any questions or requirements you may have. Get in touch with us for personalized assistance.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="rounded-lg bg-blue-500 p-8">
                  <div className="space-y-4 text-white">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="ml-3 text-lg">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="ml-3 text-lg">support@haventure.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span className="ml-3 text-lg">Live Chat Available</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-3 text-lg">24/7 Customer Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 