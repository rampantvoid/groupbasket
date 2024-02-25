import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const user = { name: "John Doe" };

  return (
    <div className="w-full p-3 flex justify-center items-center bg-white z-[999]">
      {/* Dekstop menue */}

      <div className=" w-full 2xl:mx-14 items-center justify-between flex ">
        <div className="flex flex-1">
          <Link to="/" className="flex justify-center">
            <img src="/assets/logo.svg" alt="" />

            <p className="ml-3 text-2xl font-bold font-inter text-[#565B6E] lg:flex items-center hidden">
              groupbasket
            </p>
          </Link>

          <SearchBox />
        </div>

        <div className="flex gap-4 items-center ">
          {/* language */}
          <Select>
            <SelectTrigger className="w-24 focus:!ring-0 focus:!ring-offset-0 border-none hidden lg:flex">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>

          {/* user */}
          <p className="text-sm font-bold hidden lg:block">
            Hello, {user.name}
          </p>
          {/* cart */}
          <div className="relative hover:cursor-pointer w-11">
            <div className="-top-4 absolute left-4">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-3 text-xs text-black font-bold border-4 border-white">
                0
              </p>
            </div>
            <img src="/assets/basket-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
