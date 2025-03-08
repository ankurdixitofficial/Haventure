import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function AboutReraPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-blue-700 py-8 dark:bg-blue-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">About RERA</h1>
            <p className="mt-2 text-lg text-blue-100">
              Understanding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h2>What is RERA?</h2>
                <p>
                  The Real Estate (Regulation and Development) Act, 2016 (RERA) is an Act of the Parliament of India that seeks to protect home-buyers as well as help boost investments in the real estate industry. The Act establishes a Real Estate Regulatory Authority (RERA) in each state for regulation of the real estate sector and to ensure efficient and transparent transactions.
                </p>

                <h2>Key Objectives of RERA</h2>
                <ul>
                  <li>Ensure accountability toward allottees and protect their interest</li>
                  <li>Infuse transparency, ensure fair-play and reduce frauds & delays</li>
                  <li>Introduce professionalism and standardization in the sector</li>
                  <li>Establish symmetry of information between the promoter and allottee</li>
                  <li>Impose certain responsibilities on both promoter and allottees</li>
                  <li>Establish regulatory oversight mechanism to enforce contracts</li>
                  <li>Establish fast-track dispute resolution mechanism</li>
                  <li>Promote good governance in the sector which in turn would create investor confidence</li>
                </ul>

                <h2>Benefits for Home Buyers</h2>
                <p>
                  RERA provides several benefits to home buyers, including:
                </p>
                <ul>
                  <li>Mandatory registration of real estate projects and real estate agents</li>
                  <li>Increased transparency with all project details to be disclosed on the RERA website</li>
                  <li>Standardized carpet area definition</li>
                  <li>Consent of 2/3rd allottees for any major project changes</li>
                  <li>Escrow account requirement to prevent fund diversion</li>
                  <li>Clear refund policies with interest in case of delays</li>
                  <li>Five-year liability period for structural defects</li>
                  <li>Fast-track dispute resolution through RERA authorities</li>
                </ul>

                <h2>Implementation Status</h2>
                <p>
                  The implementation of RERA varies across different states and Union Territories in India. While some states have fully implemented RERA with permanent regulatory authorities and appellate tribunals, others are still in the process of establishing the necessary infrastructure.
                </p>
                <p>
                  You can view the detailed state-wise implementation status on our{' '}
                  <Link href="/government-real-estate" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    RERA Implementation Status page
                  </Link>.
                </p>

                <h2>How to Use RERA as a Home Buyer</h2>
                <ol>
                  <li>
                    <strong>Verify Project Registration:</strong> Always check if the project is registered under RERA by visiting your state's RERA website.
                  </li>
                  <li>
                    <strong>Check Project Details:</strong> Review all project details, including approvals, layout plans, and completion timelines on the RERA website.
                  </li>
                  <li>
                    <strong>Verify Agent Registration:</strong> Ensure that the real estate agent you're dealing with is registered under RERA.
                  </li>
                  <li>
                    <strong>Review Agreement:</strong> The sale agreement must comply with RERA guidelines and include details like possession date, payment schedule, etc.
                  </li>
                  <li>
                    <strong>File Complaints:</strong> If you face issues, you can file a complaint with your state's RERA authority for quick resolution.
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Links</h2>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/government-real-estate" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                      <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      RERA Implementation Status
                    </Link>
                  </li>
                  <li>
                    <a href="https://mohua.gov.in/cms/real-estate-regulation-and-development-act-2016.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                      <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ministry of Housing and Urban Affairs
                    </a>
                  </li>
                  <li>
                    <a href="https://data.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                      <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Data.gov.in
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-6 shadow dark:bg-blue-900">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Need Help?</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  If you need assistance understanding RERA or have questions about a property, our experts can help.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Contact Our Experts
                  </Link>
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