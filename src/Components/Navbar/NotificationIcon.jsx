// src/components/Navbar/NotificationIcon.jsx
import PropTypes from 'prop-types';

const NotificationIcon = ({ icon: Icon, count }) => {
  return (
    <div className="relative w-[34px] h-[34px] flex items-center justify-center">
      <Icon className="w-[24px] h-[24px] text-gray-600" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#6C2BD9] text-white text-[10px] px-1 rounded-full font-medium">
          {count}
        </span>
      )}
    </div>
  );
};

NotificationIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  count: PropTypes.number.isRequired,
};

export default NotificationIcon;
