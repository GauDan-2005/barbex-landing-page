import { useEffect, useState } from "react";
import { Call, Logo, Menu, Search, ShoppingCart, LogoSimple } from "@/icons"; // Assume you have a Menu component
import NavDropdown from "../Dropdown/NavDropdown/NavDrowpdown";
import Button from "../Button/SolidButton/SolidButton";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex py-5 md:py-8 px-10 text-white items-center justify-between border-b-[0.0625rem] border-white/10 transition-all duration-300 ${
        isAtTop
          ? "bg-heading-color bg-opacity-60 backdrop-blur-md"
          : "bg-heading-color bg-opacity-100"
      }`}
    >
      <div className="flex flex-row gap-8 items-center justify-center">
        <Logo />
        <hr className="bg-white border-0 bg-opacity-10 h-9 w-0.5 md:flex hidden" />
        <div className="group hidden gap-4 items-center justify-between hover:text-primary-color cursor-pointer transition-all duration-500 md:flex">
          <div className="flex items-center justify-center p-2 border-[1.5px] border-white/20 border-solid group-hover:border-primary-color transition-all duration-500 rounded-full w-10 h-10">
            <Call
              size="20"
              className="fill-white group-hover:fill-primary-color transition-all duration-500"
            />
          </div>
          <p>Hotline +125 (895) 658</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-6 items-center justify-center self-stretch">
        <NavDropdown
          title="Home"
          icon="+"
          iconHover="-"
          list={["Option 1", "Option 2", "Option 3"]}
        />
        <NavDropdown
          title="Pages"
          icon="+"
          iconHover="-"
          list={["Option 1", "Option 2", "Option 3"]}
        />
        <NavDropdown
          title="Portfolio"
          icon="+"
          iconHover="-"
          list={["Option 1", "Option 2", "Option 3"]}
        />
        <NavDropdown
          title="Blog"
          icon="+"
          iconHover="-"
          list={["Option 1", "Option 2", "Option 3"]}
        />
        <NavDropdown
          title="Shop"
          icon="+"
          iconHover="-"
          list={["Option 1", "Option 2", "Option 3"]}
        />

        <Search className="fill-white hover:fill-primary-color cursor-pointer transition-all duration-500" />
        <ShoppingCart className="fill-white hover:fill-primary-color cursor-pointer transition-all duration-500" />
        <Button title="BOOKING NOW >>" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden z-50">
        <button
          className="text-white hover:text-primary-color transition-all duration-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu
            className={`transition-all duration-300 ${
              isMenuOpen ? "fill-primary-color" : "fill-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="transition-all duration-300 fixed top-[5rem] left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-start items-center text-white md:hidden z-40">
          <NavDropdown
            title="Home"
            icon="+"
            iconHover="-"
            list={["Option 1", "Option 2", "Option 3"]}
          />
          <NavDropdown
            title="Pages"
            icon="+"
            iconHover="-"
            list={["Option 1", "Option 2", "Option 3"]}
          />
          <NavDropdown
            title="Portfolio"
            icon="+"
            iconHover="-"
            list={["Option 1", "Option 2", "Option 3"]}
          />
          <NavDropdown
            title="Blog"
            icon="+"
            iconHover="-"
            list={["Option 1", "Option 2", "Option 3"]}
          />
          <NavDropdown
            title="Shop"
            icon="+"
            iconHover="-"
            list={["Option 1", "Option 2", "Option 3"]}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
