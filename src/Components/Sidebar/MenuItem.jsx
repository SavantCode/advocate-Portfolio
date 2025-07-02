// src/components/Sidebar/MenuItem.jsx
import { ChevronRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const MenuItem = ({ name, Icon, isActive, onClick, hasSub }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[300px] h-[45px] px-[20px] py-[8px] flex items-center justify-between rounded-full transition 
    ${isActive ? 'bg-[#E8DFFF] text-[#6C2BD9]' : 'bg-white text-[#676767] hover:bg-gray-100'}
  `}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="flex items-center gap-[17px] overflow-hidden whitespace-nowrap">
        <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-[#6C2BD9]' : 'text-[#676767]'}`} />
        <span className="font-medium text-sm font-[Poppins] truncate">
          {name}
        </span>
      </div>
      {hasSub && <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
    </button>

  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  hasSub: PropTypes.bool,
};

export default MenuItem;
