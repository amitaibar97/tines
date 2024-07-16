import Header from "./Header";
import MobileFooter from "./MobileFooter";

export default function Layout() {
  return (
    <div className="bg-[#FCF9F5]">
      <Header />
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
