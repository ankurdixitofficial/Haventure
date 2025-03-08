'use client';

import { ReraRecord } from '../services/reraApi';

interface ReraStatsProps {
  data: ReraRecord[];
}

export default function ReraStats({ data }: ReraStatsProps) {
  // Ensure data is an array
  const safeData = Array.isArray(data) ? data : [];
  
  // Calculate total projects and agents
  const totalProjects = safeData.reduce((sum, record) => {
    const projects = record.registrations___projects;
    return sum + (projects === 'NA' ? 0 : parseInt(projects));
  }, 0);

  const totalAgents = safeData.reduce((sum, record) => {
    const agents = record.registrations___agents;
    return sum + (agents === 'NA' ? 0 : parseInt(agents));
  }, 0);

  const totalCases = safeData.reduce((sum, record) => {
    const cases = record.total_no__of_cases_disposed_by_authority_;
    return sum + (cases === 'NA' ? 0 : parseInt(cases));
  }, 0);

  // Find state with most projects
  const stateWithMostProjects = safeData.reduce(
    (max, record) => {
      const projects = record.registrations___projects;
      const projectCount = projects === 'NA' ? 0 : parseInt(projects);
      return projectCount > max.count
        ? { state: record.state_ut, count: projectCount }
        : max;
    },
    { state: 'None', count: 0 }
  );

  // Find state with most agents
  const stateWithMostAgents = safeData.reduce(
    (max, record) => {
      const agents = record.registrations___agents;
      const agentCount = agents === 'NA' ? 0 : parseInt(agents);
      return agentCount > max.count
        ? { state: record.state_ut, count: agentCount }
        : max;
    },
    { state: 'None', count: 0 }
  );

  // Find state with most cases disposed
  const stateWithMostCases = safeData.reduce(
    (max, record) => {
      const cases = record.total_no__of_cases_disposed_by_authority_;
      const caseCount = cases === 'NA' ? 0 : parseInt(cases);
      return caseCount > max.count
        ? { state: record.state_ut, count: caseCount }
        : max;
    },
    { state: 'None', count: 0 }
  );

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Registered Projects
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {totalProjects.toLocaleString()}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
          <div className="text-sm">
            <span className="font-medium text-blue-700 dark:text-blue-400">
              {stateWithMostProjects.state}
            </span>{' '}
            <span className="text-gray-500 dark:text-gray-300">
              has the most with {stateWithMostProjects.count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Registered Agents
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {totalAgents.toLocaleString()}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
          <div className="text-sm">
            <span className="font-medium text-green-700 dark:text-green-400">
              {stateWithMostAgents.state}
            </span>{' '}
            <span className="text-gray-500 dark:text-gray-300">
              has the most with {stateWithMostAgents.count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Cases Disposed
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {totalCases.toLocaleString()}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
          <div className="text-sm">
            <span className="font-medium text-purple-700 dark:text-purple-400">
              {stateWithMostCases.state}
            </span>{' '}
            <span className="text-gray-500 dark:text-gray-300">
              has the most with {stateWithMostCases.count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  States/UTs with RERA
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {safeData.length}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
          <div className="text-sm">
            <span className="font-medium text-red-700 dark:text-red-400">
              {safeData.filter(r => r.web_portal === 'Setup').length}
            </span>{' '}
            <span className="text-gray-500 dark:text-gray-300">
              states have web portals set up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 