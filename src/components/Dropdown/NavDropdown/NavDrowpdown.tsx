import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  iconHover: React.ReactNode;
  list: string[];
};

const NavDropdown = ({ title, icon, iconHover, list }: Props) => {
  return (
    <div className="relative flex flex-col group">
      {/* Title and Icon */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-primary-color">
        <p>{title}</p>
        {/* Show `iconHover` when hovered, otherwise show `icon` */}
        <div className="flex items-center justify-center min-w-2.5">
          <span className="group-hover:hidden">{icon}</span>
          <span className="hidden group-hover:flex ">{iconHover}</span>
        </div>
      </div>

      {/* Hidden List - will appear on hover */}
      <ul className="absolute top-full left-0 mt-2 hidden w-48 bg-white border border-gray-200 rounded-md shadow-md group-hover:flex flex-col text-heading-color">
        {list.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;
