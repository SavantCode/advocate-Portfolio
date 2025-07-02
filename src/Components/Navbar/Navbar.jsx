// src/components/Navbar/Navbar.jsx
import { MenuIcon, SearchIcon, ChatAlt2Icon } from '@heroicons/react/outline';
import NotificationIcon from './NotificationIcon';
import ProfileMenu from './ProfileMenu';
import Logo from '../../assets/Logo.png'; // Adjust the path as necessary
import ProfileImage from '../../assets/profile/profile.png'; 
import {ChatIcon} from '../../assets/Icons/IconsSvg'; 
import {BellIcon} from '../../assets/Icons/IconsSvg'; 

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full h-[72px] flex items-center justify-between px-6 bg-white shadow-md">
      {/* Left section: Logo + Hamburger + Search */}
      <div className="flex items-center gap-4">
        {/* Hamburger */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle Sidebar"
        >
          <MenuIcon className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo */}
        {/* <img src={Logo} alt="Logo" className="h-[40px] object-contain" /> */}

        {/* Search Bar */}
        <div className="ml-4 w-[388px] h-[40px] flex items-center bg-[#F8FAFD] border border-[#ECECEC] rounded-md px-3">
          <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full bg-transparent outline-none text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Right section: Chat, Notification, Profile */}
      <div className="flex items-center gap-6">
        {/* Chat Icon with Badge */}
        <NotificationIcon icon={ChatIcon} count={10} />

        {/* Bell Icon with Badge */}
        <NotificationIcon icon={BellIcon} count={10} />

        {/* Profile */}
        <ProfileMenu
          name="Mohd Saleem"
          role="Admin"
          imageUrl={ProfileImage} // Adjust the path as necessary
        />
      </div>
    </header>
  );
};

export default Navbar;
