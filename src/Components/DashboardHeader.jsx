import { FiPlus, FiDownload } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <div className="px-6 pt-6 bg-white">
      {/* Breadcrumb and Title */}
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Buyer Meeting List View
          </h1>
          <div className="text-sm text-gray-500">
            <span className="text-purple-600 font-medium">Buyer Meeting</span>
            <span className="mx-1"> &gt; </span>
            <span>Buyer Meeting List View</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
            <FiDownload className="mr-2 text-lg" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
            <FiPlus className="mr-2 text-lg" />
            Create New Meeting
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-6 border border-gray-200 rounded-lg p-3 flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-purple-600 font-medium">All</span>
          <span className="bg-purple-100 text-purple-700 px-2 py-0.5 text-xs rounded-full font-semibold">100</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <span>Draft</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 text-xs rounded-full font-semibold">50</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <span>Archive</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 text-xs rounded-full font-semibold">75</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
