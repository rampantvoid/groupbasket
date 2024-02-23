import React from "react";
import { Input } from "./ui/input";
// import { Link } from "react-router-dom";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
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
  const [searchText, setSearchText] = React.useState("");

  const onTyping = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    console.log(searchText);
  };
  return (
    <div className="w-full p-3 shadow-md flex justify-center items-center bg-white  z-[999]">
      {/* Dekstop menue */}

      <div className="hidden w-full 2xl:mx-14 items-center justify-between lg:flex ">
        <div className="flex flex-1">
          <img src="/assets/logo.svg" alt="" />

          <p className="ml-3 text-2xl font-bold font-inter text-[#565B6E] flex items-center">
            groupbasket
          </p>

          <SearchBox />
        </div>

        <div className="flex gap-4 items-center ">
          <Select>
            <SelectTrigger className="w-24 focus:!ring-0 focus:!ring-offset-0 border-none">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm font-bold">Hello, {user.name}</p>

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

      {/* Mobile menue */}
      <Drawer>
        <div className="flex w-full items-center justify-between lg:hidden ">
          <DrawerTrigger>
            <img src="/assets/search-icon.png" alt="" />
          </DrawerTrigger>

          <div className=" text-2xl font-bold font-inter md:text-4xl">
            <img src="/assets/logo.svg" alt="" />
          </div>

          <DrawerContent className="h-svh">
            <div className="p-8 flex w-full flex-col">
              <div className="flex border rounded-md">
                <img className="mx-2" src="/assets/search-solid.svg" alt="" />
                <Input
                  type="text"
                  className="p-2 pl-0 font-inter w-[300px] xl:w-[500px] border-none focus:!ring-0 focus:!ring-offset-0"
                  placeholder="Search for courses"
                  value={searchText}
                  onChange={onTyping}
                />
              </div>
            </div>
          </DrawerContent>

          <div className="relative hover:cursor-pointer w-[40px]">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-3 text-xs text-black font-bold">
                3
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </Drawer>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      @keyframes slide-in {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
    </div>
  );
};

export default Navbar;
