// src/pages/BuyerMeetingPage.jsx
import FilterButton from '../Components/Common/FilterButton';
import Breadcrumb from '../Components/Common/Breadcrumb';
import { PlusIcon } from '@heroicons/react/solid';
import { DownloadIcon } from '@heroicons/react/outline';
import { ArrowUpTrayIcon } from '../assets/Icons/IconsSvg';
import { useState } from 'react';

export default function BuyerMeetingPage() {

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', count: 100 },
    { label: 'Draft', count: 50 },
    { label: 'Archive', count: 75 },
  ];
  return (
    <div className="pl-[20px] pr-6 pt-[24px] pb-6 bg-[#F9F9F9] min-h-screen font-poppins relative">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-3 gap-3">
        <h1 className="text-[18px] font-semibold text-black leading-[27px]">
          Buyer Meeting List View
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#AF63FF] text-white text-sm font-medium px-6 py-[6px] rounded-[5px]">
            <ArrowUpTrayIcon className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-[6px] rounded-[5px]">
            <PlusIcon className="w-4 h-4" />
            Create New Meeting
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Buyer Meeting', active: true },
          { label: 'Buyer Meeting List View' }
        ]}
      />

      {/* Filters */}
      <div className="flex gap-[10px] items-center bg-white border border-[#D9D9D9] rounded-[5px] p-[10px] w-full max-w-[1235px] overflow-x-auto">
        {filters.map(({ label, count }) => (
          <FilterButton
            key={label}
            label={label}
            count={count}
            active={activeFilter === label}
            onClick={() => setActiveFilter(label)}
          />
        ))}
      </div>
    </div>
  );
}
