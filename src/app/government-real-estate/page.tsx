'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReraDataTable from '../../components/ReraDataTable';
import ReraStats from '../../components/ReraStats';
import { fetchReraData, ReraRecord } from '../../services/reraApi';

export default function GovernmentRealEstatePage() {
  const [reraData, setReraData] = useState<ReraRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadReraData = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        // Explicitly use XML format since that's what the API is returning
        const response = await fetchReraData(limit, offset, 'xml');
        
        if (response.success && response.data) {
          // Check if records.item is an array or a single object
          // If it's a single object, wrap it in an array
          let dataItems = [];
          if (response.data.records && response.data.records.item) {
            dataItems = Array.isArray(response.data.records.item) 
              ? response.data.records.item 
              : [response.data.records.item];
          }
          
          setReraData(dataItems);
          setTotalRecords(response.data.total || 0);
        } else {
          setError(response.error || 'Failed to fetch RERA data');
        }
      } catch (err) {
        setError('An unexpected error occurred');
        console.error('Error loading RERA data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReraData();
  }, [currentPage, limit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredData = searchTerm
    ? reraData.filter(
        (record) =>
          record.state_ut.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : reraData;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-blue-700 py-8 dark:bg-blue-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Government Real Estate Data</h1>
            <p className="mt-2 text-lg text-blue-100">
              State/UTs-wise Real Estate (Regulation & Development) Act, 2016 (RERA) Implementation Progress Report
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              RERA Implementation Statistics
            </h2>
            {loading && reraData.length === 0 ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
              </div>
            ) : error && reraData.length === 0 ? (
              <div className="rounded-lg bg-red-50 p-4 text-center text-red-800 dark:bg-red-900 dark:text-red-200">
                {error}
              </div>
            ) : (
              <ReraStats data={reraData} />
            )}
          </div>

          {/* Search and Table Section */}
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                State/UT-wise RERA Implementation
              </h2>
              <div className="mt-4 sm:mt-0">
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                    placeholder="Search by state..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <ReraDataTable
              data={filteredData}
              total={totalRecords}
              currentPage={currentPage}
              limit={limit}
              onPageChange={handlePageChange}
              loading={loading}
            />

            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Source: Rajya Sabha, data.gov.in
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last Updated: March 19, 2022
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 