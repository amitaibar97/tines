import Menu from "./Menu";
import Search from "./Search";
import TinesLogo from "./TinesLogo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Header() {
  return (
    <header className="bg-[#FCF9F5] flex justify-between items-center p-3 sm:py-7 sm:pl-7 md:pr-7 shadow-md">
      <div className="flex items-center space-x-2">
        <TinesLogo />
      </div>
      <nav className="hidden sm:flex text-xs space-x-1.5 md:ml-16 lg:text-[0.813rem]">
        
        <div className="bg-[#f1eee9] p-2 space-x-3 rounded-lg md:space-x-6 md:min-w-[17rem] lg:min-w-[21rem] flex items-center lg:px-4">
          <button className="font-medium flex items-center">
            Product
            <span className="hidden lg:inline-flex pl-1">
              <ExpandMoreIcon fontSize="small" />
            </span>
          </button>
          <button className="font-medium flex items-center">
            Solutions
            <span className="hidden lg:inline-flex pl-1">
              <ExpandMoreIcon fontSize="small" />
            </span>
          </button>
          <button className="font-medium flex items-center">
            Resources
            <span className="hidden lg:inline-flex pl-1">
              <ExpandMoreIcon fontSize="small" />
            </span>
          </button>
          <button className="font-medium">Pricing</button>
        </div>
        <button className="bg-[#f1eee9] px-2.5 rounded-full">
          <Search />
        </button>
      </nav>
      {/* hey hhhh */}
      <div className="flex items-center space-x-2 text-xs justify-center ">
        <button className="hidden sm:block font-medium hover:bg-[#8d75e62e] focus:bg-[#8d75e62e] px-3 py-2 rounded-md">Log in</button>
        <div className=" text-slate-400 hidden sm:block text-base font-light">
          |
        </div>
        <button className="hidden sm:block font-medium hover:bg-[#8d75e62e] focus:bg-[#8d75e62e] px-3 py-2 rounded-md">Sign up</button>
        <button className="hidden sm:block px-3 py-2 bg-[#8d75e6] text-white rounded-md text-[0.813rem] font-semibold hover:bg-[#8d75e6b3] focus:bg-[#8d75e6b3]">
          Book a demo
        </button>
        <div className="sm:hidden flex items-center space-x-6 justify-center">
          <button className=" py-2  text-black rounded-md text-[0.813rem] font-semibold">
            Book a demo
          </button>
          <button className="text-gray-600">
            <Search />
          </button>
          <button className="text-gray-600">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
