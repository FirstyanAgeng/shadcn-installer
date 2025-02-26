import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto h-16  w-full border-b dark:border-slate-700/70">
      <nav className="fixed top-0  inset-x-4  z-50 h-16   max-w-screen-xl mx-auto ">
        <div className="h-full flex items-center justify-between mx-auto px-4  ">
          <img src="/fractional-service.png" alt="Fractional System" className="w-[150px] h-[40px] object-cover" />

          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            {/* <Button variant="outline" className="hidden sm:inline-flex rounded-full">
              Sign In
            </Button>
            <Button className="rounded-full">Get Started</Button> */}

            <div className="flex items-center gap-[12px]">
              <img src="/profile.png" alt="Fractional System" className="w-[32px] h-[32px] object-cover" />
              <span className="text-[14px] leading-[20px]">Noble Noerman</span>
              <ChevronDown className="text-[#0166FF]" />
            </div>

            <div className="md:hidden ">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
