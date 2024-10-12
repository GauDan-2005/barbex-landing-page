"use client";
import { useState } from "react";
import IconMap from "./assets/IconMap";

const EmptyIcon = () => <div />;

const Icon = ({ name, size, color, hoverColor, cursor, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false); // State for hover
  const Icon = IconMap[name] || EmptyIcon;

  return (
    <Icon
      {...rest}
      style={{ width: size, height: size, cursor: cursor }}
      color={isHovered ? hoverColor : color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default Icon;
