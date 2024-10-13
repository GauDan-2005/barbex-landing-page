import React from "react";

interface ButtonProps {
  title: string;
  func?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, func, className }) => {
  return (
    <a
      className={`
        relative inline-flex items-center justify-center
        px-5 py-3 z-10 bg-transparent transition-all duration-500
        before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
        after:content-[''] after:absolute after:inset-0 after:-z-10
        after:transition-all after:duration-500
        after:bg-primary-color
        hover:after:inset-full
        group ${className}
      `}
      onClick={func}
    >
      <span className="group-hover:text-primary-color transition-colors duration-500 text-white font-black">
        {title}
      </span>
    </a>
  );
};

export default Button;
