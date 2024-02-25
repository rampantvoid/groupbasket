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
    <div className="w-full p-3 flex justify-center items-center bg-[var(--nav-color)] z-[999] text-[var(--primary-text)] ">
      {/* Dekstop menue */}

      <div className=" w-full 2xl:mx-14 items-center justify-between flex ">
        <div className="flex flex-1">
          <Link to="/" className="flex justify-center items-center">
            <img src="/assets/logo.svg" alt="" />

            <p className="ml-3 text-2xl font-bold font-inter text-[var(--nav-text)] lg:flex items-center hidden">
              groupbasket
            </p>
          </Link>

          <SearchBox />
        </div>

        <div className="flex gap-4 items-center ">
          {/* language */}
          <Select>
            <SelectTrigger className="w-24 focus:!ring-0 focus:!ring-offset-0 border-none hidden lg:flex bg-[var(--nav-color)]">
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
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H4.75504C5.69438 2 6.50713 2.6537 6.70853 3.57119L7.40133 6.72727M7.40133 6.72727L9.63398 16.0998C9.84857 17.0006 10.6535 17.6364 11.5795 17.6364H22.4876C23.4652 17.6364 24.2996 16.9295 24.4604 15.9652L25.4178 10.2205C25.7226 8.39187 24.3124 6.72727 22.4586 6.72727H7.40133Z"
                className="stroke-[var(--primary-text)]"
                stroke-width="3.5"
                stroke-linecap="round"
              />
              <circle
                cx="10.7274"
                cy="23.4545"
                r="1.81818"
                className="fill-[var(--primary-text)]"
              />
              <circle
                cx="22.3636"
                cy="23.4545"
                r="1.81818"
                className="fill-[var(--primary-text)]"
              />
            </svg>

            {/* <img src="/assets/basket-icon.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
