import React, { useRef, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import useResize from "@/hooks/Resize";

const SearchBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { width } = useResize(ref);

  // fetch products
  const fetchProducts = async (value: string) => {
    try {
      if (value !== "") {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        );
        console.log(response.data.products);
        setSearchResult(response.data.products);
      } else {
        setSearchResult([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onTyping = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    fetchProducts(e.currentTarget.value);
    console.log(searchText);
  };

  return (
    <>
      <div
        className="flex mx-4 lg:ml-6 items-center border rounded-md px-2 lg:px-4 relative w-full bg-[var(--nav-color)] text-[var(--primary-text)]"
        ref={ref}
      >
        <Input
          type="search"
          className="p-2 pl-0 font-inter w-full border-none focus:!ring-0 focus:!ring-offset-0 italic bg-[var(--nav-color)]"
          placeholder="Find best deals for you"
          value={searchText}
          onChange={onTyping}
        />

        <img className="mx-2" src="/assets/search-icon.png" alt="" />
      </div>
      {searchResult.length > 0 && (
        <div className="search-results absolute top-14 left-[50px] 2xl:left-[255px] lg:left-[195px] bg-white border-2 max-h-[500px] rounded-md  z-[9999]">
          <ul>
            <ScrollArea className="w-full h-64">
              {searchResult.map((product: any) => (
                <li className="p-4 border-b cursor-pointer hover:bg-slate-300">
                  {product.title}
                </li>
              ))}
            </ScrollArea>
          </ul>
          <style>
            {`
          .search-results{
            width: ${width}px;
          }
          `}
          </style>
        </div>
      )}
    </>
  );
};

export default SearchBox;
