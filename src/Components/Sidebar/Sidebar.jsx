import Logo from '../../assets/Logo.png';
// src/components/Sidebar/Sidebar.jsx
import { useState } from 'react';
import { menuItems } from './menuConfig';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className="w-[315px] h-screen  p-[10px] bg-white flex flex-col gap-[14px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.08)]"
      role="navigation"
      aria-label="Sidebar"
    >
      {/* Logo Area */}
      <div className="w-[242px] h-[60px] flex items-center gap-[28px] pt-[2px] pr-[10px] pb-[8px] pl-[10px]">
        <img src={Logo} alt="Company Logo" className="h-full object-contain" />
      </div>

      {/* Menu Items Container */}
      <div
        className="w-[300px] h-[995px] flex flex-col gap-[5px] overflow-y-auto hide-scrollbar"

        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {menuItems.map(({ name, icon: Icon, hasSub }) => (
          <MenuItem
            key={name}
            name={name}
            Icon={Icon}
            hasSub={hasSub}
            isActive={activeItem === name}
            onClick={() => setActiveItem(name)}
          />
        ))}
      </div>
    </aside>
  );
}
