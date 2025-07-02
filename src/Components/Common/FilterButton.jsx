export default function FilterButton({ label, count, active, onClick }) {
  return (
    <div
      onClick={onClick}  // 👈 THIS LINE makes the button clickable
      className={`flex items-center justify-between gap-2 px-4 py-2 rounded-md cursor-pointer transition
        ${active ? 'bg-[#EAD9FF]' : 'bg-white border border-[#D9D9D9] hover:border-[#B0B0B0]'}
      `}
    >
      <span
        className={`text-sm font-medium ${
          active ? 'text-[#6708CC]' : 'text-[#676767]'
        }`}
      >
        {label}
      </span>
      <span
        className={`min-w-[18px] h-[18px] px-[5px] rounded flex items-center justify-center text-[10px] font-bold leading-[14px]
        ${active ? 'bg-[#6708CC] text-white' : 'bg-[#676767] text-white'}`}
      >
        {count}
      </span>
    </div>
  );
}
