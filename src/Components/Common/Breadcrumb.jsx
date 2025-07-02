// src/components/common/Breadcrumb.jsx
import PropTypes from 'prop-types';
import { DoubleRightArrow } from '../../assets/Icons/IconsSvg';

export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-medium mb-5">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className={`mr-1 ${item.active ? 'text-[#8210FB]' : 'text-[#676767]'}`}>
            {item.label}
          </span>
          {index !== items.length - 1 && (
            <span className="flex items-center">
              <DoubleRightArrow className="w-[11px] h-[11px] text-[#676767] mx-2" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
