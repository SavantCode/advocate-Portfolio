// src/components/Navbar/ProfileMenu.jsx
import PropTypes from 'prop-types';

const ProfileMenu = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center gap-3 w-[141px]">
      <img
        src={imageUrl}
        alt="User Profile"
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <div>
        <p className="text-[13px] font-[700] font-poppins text-gray-800 leading-[14px]">
          {name}
        </p>
        <p className="text-[12px] text-[#676767] font-poppins">Admin</p>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileMenu;
