

import { useState } from 'react';
import mockMeetings from './Data/mockData.json';
import { FaEllipsisV } from 'react-icons/fa';
import { FiChevronDown as SortIcon } from 'react-icons/fi';
import { Menu } from '@headlessui/react';

const STATUS_STYLES = {
  Completed:        'bg-green-200 text-green-800 border border-green-300 hover:bg-green-300',
  Complete:         'bg-green-200 text-green-800 border border-green-300 hover:bg-green-300',
  Upcoming:         'bg-yellow-200 text-yellow-800 border border-yellow-300 hover:bg-yellow-300',
  Overdue:          'bg-red-200 text-red-800 border border-red-300 hover:bg-red-300',
  'In Progress':    'bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200',
  Ongoing:          'bg-blue-200 text-blue-900 border border-blue-300 hover:bg-blue-300',
  Draft:            'bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300',
  Archived:         'bg-red-100 text-red-600 border border-red-200 hover:bg-red-200',
  Cancelled:        'bg-gray-300 text-gray-700 border border-gray-400 hover:bg-gray-400',
  'Re Scheduled':   'bg-purple-200 text-purple-800 border border-purple-300 hover:bg-purple-300',
  'Follow Up':      'bg-indigo-200 text-indigo-800 border border-indigo-300 hover:bg-indigo-300',
};

const TypeTag = ({ type }) => (
  <span className={`px-3 py-1 rounded text-xs font-semibold ${
    type === 'Online' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
    {type}
  </span>
);

const PER_PAGE_OPTIONS = [10, 25, 50];

export default function StatusTable() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  // Sorting logic
  const sorted = [...mockMeetings].sort((a, b) => {
    const dir = sortConfig.direction === 'asc' ? 1 : -1;

    if (sortConfig.key === 'buyer') {
      const valA = a.buyer.name.toLowerCase();
      const valB = b.buyer.name.toLowerCase();
      if (valA > valB) return 1 * dir;
      if (valA < valB) return -1 * dir;
      return 0;
    }

    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (valA > valB) return 1 * dir;
    if (valA < valB) return -1 * dir;
    return 0;
  });

  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginated = sorted.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const getPageNumbers = () => {
    const delta = 2;
    let range = [];
    for (let i = Math.max(1, page - delta); i <= Math.min(totalPages, page + delta); i++) {
      range.push(i);
    }
    if (range[0] > 2) {
      range = [1, '...', ...range];
    } else if (range[0] === 2) {
      range = [1, ...range];
    }
    if (range[range.length - 1] < totalPages - 1) {
      range = [...range, '...', totalPages];
    } else if (range[range.length - 1] === totalPages - 1) {
      range = [...range, totalPages];
    }
    return range;
  };

  const requestSort = key => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
    setPage(1);
  };

  const headers = [
    { key: 'dateTime', label: 'Date & Time', sortable: true },
    { key: 'status', label: 'Status', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'buyer', label: 'Buyer Name', sortable: true },
    { key: 'brand', label: 'Brand', sortable: true },
    { key: 'dept', label: 'Dept.', sortable: true },
    { key: 'title', label: 'Title', sortable: true },
    { key: 'meetingDate', label: 'Meeting Date', sortable: true },
    { key: 'participants', label: 'Participants', sortable: false },
  ];

  return (
    <div className="flex flex-col h-full px-8 py-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col flex-grow max-w-[calc(100vw-64px)] mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left text-sm border-collapse">
            <thead className="bg-gray-100 select-none text-sm text-gray-800 font-medium shadow-sm">
  <tr>
    {/* Checkbox column (no right border) */}
    <th className="sticky left-0 z-30 bg-gray-100 px-4 py-3 w-14">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer border border-gray-400 rounded"
      />
    </th>

    {headers.map(({ key, label, sortable }) => (
      <th
        key={key}
        className="py-3 px-4 whitespace-nowrap bg-gray-100"
      >
        <button
          onClick={() => sortable && requestSort(key)}
          disabled={!sortable}
          className={`flex items-center gap-1 w-full text-left font-medium text-gray-700 ${
            sortable ? 'hover:text-purple-700' : 'cursor-default'
          }`}
        >
          {label}
          {sortable && (
            <SortIcon
              className={`transition-transform duration-200 ${
                sortConfig.key === key
                  ? sortConfig.direction === 'asc'
                    ? 'rotate-180 text-purple-700'
                    : 'text-purple-700'
                  : 'text-gray-400'
              }`}
              size={16}
            />
          )}
        </button>
      </th>
    ))}

    {/* Sticky Action column with left border + shadow */}
    <th className="sticky right-0 z-30 bg-gray-100 px-4 py-3 w-16 border-l border-gray-300 shadow-outline">
      Action
    </th>
  </tr>
</thead>



            <tbody>
              {paginated.map((me) => (
                <tr
                  key={me.id}
                  className="hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  {/* Checkbox without right border */}
                  <td className="sticky left-0 bg-white z-20 px-4 py-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.dateTime}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded text-xs font-semibold ${STATUS_STYLES[me.status]}`}
                    >
                      {me.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <TypeTag type={me.type} />
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {me.buyer.url ? (
                      <a
                        href={me.buyer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {me.buyer.name}
                      </a>
                    ) : (
                      me.buyer.name
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.brand}</td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.dept}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-blue-600 underline cursor-pointer">
                    {me.title}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.meetingDate}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {me.participants[0]}
                    {me.participants.length > 1 && ` +${me.participants.length - 1}`}
                  </td>
                  {/* Sticky action */}
                  <td className="sticky right-0 bg-white z-20 border-l border-gray-300 px-4 py-3 text-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="p-1 hover:bg-gray-100 rounded">
                        <FaEllipsisV />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 shadow-lg rounded z-40">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`w-full text-left px-3 py-2 ${
                                active ? 'bg-gray-100' : ''
                              }`}
                            >
                              View Participants
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`w-full text-left px-3 py-2 ${
                                active ? 'bg-gray-100' : ''
                              }`}
                            >
                              Edit
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`w-full text-left px-3 py-2 ${
                                active ? 'bg-gray-100' : ''
                              }`}
                            >
                              Delete
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination & Controls container */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-4 border-t border-gray-300 bg-white rounded-b-lg sticky bottom-0 z-20">
          {/* Items per page: fix breaking with nowrap + min-width */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium select-none min-w-[180px] flex-shrink-0 whitespace-nowrap">
            <label htmlFor="itemsPerPage" className="whitespace-nowrap">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value));
                setPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {PER_PAGE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Showing items count */}
          <div className="text-gray-600 text-sm select-none whitespace-nowrap min-w-[120px] text-center flex-grow">
            {`${(page - 1) * itemsPerPage + 1} - ${Math.min(page * itemsPerPage, totalItems)} of ${totalItems}`}
          </div>

          {/* Pagination */}
          <nav
            className="flex items-center space-x-1 select-none justify-end min-w-[200px] flex-shrink-0"
            aria-label="Pagination"
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &lt;
            </button>

            {getPageNumbers().map((pageNum, idx) =>
              pageNum === '...' ? (
                <span key={idx} className="px-2 text-gray-500 select-none">
                  ...
                </span>
              ) : (
                <button
                  key={idx}
                  onClick={() => setPage(pageNum)}
                  className={`px-3 py-1 rounded border ${
                    page === pageNum
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 bg-white hover:bg-purple-100'
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}