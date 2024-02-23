import React, { useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
      <div className="flex mx-4 lg:ml-6 items-center border rounded-md px-2 lg:px-4 relative w-full">
        <Input
          type="search"
          className="p-2 pl-0 font-inter w-full border-none focus:!ring-0 focus:!ring-offset-0 italic"
          placeholder="Find best deals for you"
          value={searchText}
          onChange={onTyping}
        />

        <img className="mx-2" src="/assets/search-icon.png" alt="" />
      </div>
      {searchResult.length > 0 && (
        <div className="absolute top-14 left-[55px] 2xl:left-[280px] lg:left-[225px] bg-white border-2 max-h-[500px] rounded-md w-1/2 ">
          <ul>
            <ScrollArea className="w-full h-64">
              {searchResult.map((product: any) => (
                <li className="p-4 border-b cursor-pointer hover:bg-slate-300">
                  {product.title}
                </li>
              ))}
            </ScrollArea>
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBox;
