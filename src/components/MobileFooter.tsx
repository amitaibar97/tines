import Bot from "./Bot";
import Tines from "./Tines";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MobileFooter() {
  const menuItems = [
    "Product",
    "Solutions",
    "Resources",
    "Company",
    "Connect",
    "RSS",
  ];

  return (
    <div className="bg-[#FCF9F5] flex flex-col items-center justify-center  fixed bottom-0 w-full">
      <div className="w-full py-9">
        <ul className=" text-sm font-semibold px-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center py-5  ${
                index !== menuItems.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <h3>{item}</h3>
              <ExpandMoreIcon fontSize="small" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center py-5">
          <Tines />
        </div>
        <div className="text-center text-xs ">
          <span>© Tines</span>
          <span className="mx-2">|</span>
          <span className="font-semibold">Cookie settings</span>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-[#F69267] text-white rounded-full p-4">
          <div className="text-xs">
            <Bot />
          </div>
        </button>
      </div>
    </div>
  );
}
