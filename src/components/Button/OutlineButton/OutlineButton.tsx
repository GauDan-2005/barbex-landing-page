import React from "react";

interface OutlineButtonProps {
  title: string;
  func?: () => void;
  className?: string;
  invert?: boolean | false;
}

const OulineButton: React.FC<OutlineButtonProps> = ({
  title,
  func,
  className,
  invert,
}) => {
  return (
    <a
      className={`
        relative inline-flex items-center justify-center
        ${invert ? "border-white" : "border-primary-color"} border 
        px-5 py-3 z-10 bg-transparent transition-all duration-500
        before:content-[''] before:absolute before:inset-0 before:bg-transparent before:-z-10
        after:content-[''] after:absolute after:inset-full after:-z-10
        after:transition-all after:duration-500
        ${invert ? "after:bg-white" : "after:bg-primary-color"}
        hover:after:inset-0
        group ${className}
      `}
      onClick={func}
    >
      <span
        className={`group-hover:${
          invert ? "text-primary-color" : "text-white"
        } transition-colors duration-500 ${
          invert ? "text-white" : "text-primary-color"
        } font-black`}
      >
        {title}
      </span>
    </a>
  );
};

export default OulineButton;
