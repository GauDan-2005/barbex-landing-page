import { Call, Logo, Search, ShoppingCart } from "@/icons";
import NavDropdown from "../Dropdown/NavDropdown/NavDrowpdown";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex bg-heading-color bg-opacity-60 p-8 px-16 text-white items-center justify-between border-b-[0.0625rem] border-white/10">
      <div className="flex flex-row gap-8 items-center justify-center">
        <Logo />
        <hr className="bg-white border-0 bg-opacity-10 h-9 w-0.5" />
        <div className="flex gap-4 items-center justify-between hover:text-primary-color cursor-pointer">
          <div className="flex items-center justify-center p-2 border-[1.5px] border-white/20 border-solid rounded-full w-10 h-10">
            <Call size="20" fill={"white"} />
          </div>
          <p>Hotline +125 (895) 658</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center self-stretch">
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

        <Search fill="#fff" />
        <ShoppingCart fill="#fff" />
        <Button title="BOOKING NOW >>" />
      </div>
    </nav>
  );
};

export default Navbar;
