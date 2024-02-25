import SlideIndicator from "@/components/SlideIndicator";
import SponsoredDeals from "@/components/SponsoredDeals";
import { CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const categories = [
  { name: "mobile", image: "/assets/categories/mobile.png" },
  { name: "appliances", image: "/assets/categories/appliances.png" },
  { name: "electronics", image: "/assets/categories/electronics.png" },
  { name: "kitchen", image: "/assets/categories/kitchen.png" },
  { name: "cooking", image: "/assets/categories/cooking.png" },
  { name: "furniture", image: "/assets/categories/furniture.png" },
  { name: "shoes", image: "/assets/categories/shoes.png" },
  { name: "makeup", image: "/assets/categories/makeup.png" },
  { name: "jewlrey", image: "/assets/categories/jewlrey.png" },
  { name: "watches", image: "/assets/categories/watches.png" },
  { name: "camera", image: "/assets/categories/camera.png" },
];

const deals = [
  { image: "assets/laptop.png" },
  { image: "/assets/image 9.png" },
  { image: "/assets/image 10.png" },
  { image: "/assets/image 13.png" },
  { image: "/assets/image 14.png" },
  { image: "/assets/image 11.png" },
];

const Home = () => {
  const [activeIndex, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [api, setApi] = React.useState<CarouselApi>();

  const scroll = (index: number) => {
    api?.scrollTo(index);
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    console.log(api.scrollSnapList());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="border-b-2 border-[#D9D9D9] bg-[#F7F7F7] flex justify-center">
        <div className="w-full p-2 2xl:mx-32  flex">
          <SlideIndicator
            slides={scrollSnaps}
            scroll={scroll}
            activeIndex={activeIndex}
          />
          <div className="w-full flex items-center justify-center">
            <SponsoredDeals setApi={setApi} />
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] w-full flex justify-center">
        <div className="w-full p-8 2xl:mx-28 flex flex-col gap-8 md:gap-14">
          {/* deals */}
          <div className="w-full flex flex-col">
            <p className="font-bold text-xl">Deals closing soon!</p>

            <ScrollArea className="w-full">
              <div className="flex w-max py-8 px-4 gap-8 2xl:gap-12 mx-auto">
                {deals.map((deal, key) => (
                  <Link to={`/product/${key + 1}`}>
                    <div
                      className="bg-white p-8 rounded-md shadow-md flex flex-col gap-3 items-center w-72 hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out "
                      key={key}
                    >
                      <img
                        src={deal.image}
                        alt=""
                        className="h-[200px] w-[100px] object-contain"
                      />

                      <p className="text-sm line-clamp-2 mt-4">
                        MSI Gaming GF63 Thin, Intel 11th Gen. i5-11400H, 40CM
                        FHD...
                      </p>

                      <p className="w-full font-bold flex justify-between items-center">
                        &#8377; 54,990.00{" "}
                        <span className="text-sm font-light">
                          MRP &#8377; 76,990.00
                        </span>
                      </p>
                      <div className="w-full">
                        <Progress value={78} className="h-3" />
                        <p className="w-full text-sm">78% Claimed</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="" />
            </ScrollArea>
          </div>

          {/* categories */}
          <div className="w-full flex flex-col">
            <p className="font-bold text-xl">Deals by categories</p>

            <ScrollArea className="w-full">
              <div className="flex w-max p-8 gap-24 mx-auto">
                {categories.map((i, key) => (
                  <img
                    src={i.image}
                    alt=""
                    key={key}
                    className="object-contain hover:cursor-pointer hover:scale-[1.05] transition-all ease-in-out "
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="" />
            </ScrollArea>
          </div>

          {/* upcoming deals */}
          <div className="w-full flex flex-col">
            <p className="font-bold text-xl">Upcoming Deals</p>

            <ScrollArea className="w-full">
              <div className="flex w-max py-8 px-4 gap-8 2xl:gap-12 mx-auto">
                {deals.map((deal, key) => (
                  <Link to={`/product/${key + 1}`}>
                    <div
                      className="bg-white p-8 rounded-md shadow-md flex flex-col gap-3 items-center w-72 hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out "
                      key={key}
                    >
                      <img
                        src={deal.image}
                        alt=""
                        className="h-[200px] w-[100px] object-contain"
                      />

                      <p className="text-sm line-clamp-2 mt-4">
                        MSI Gaming GF63 Thin, Intel 11th Gen. i5-11400H, 40CM
                        FHD...
                      </p>

                      <p className="w-full font-bold flex justify-between items-center">
                        &#8377; 54,990.00{" "}
                        <span className="text-sm font-light">
                          MRP &#8377; 76,990.00
                        </span>
                      </p>
                      <div className="w-full">
                        <Progress value={78} className="h-3" />
                        <p className="w-full text-sm">78% Claimed</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="" />
            </ScrollArea>
          </div>

          {/* buttons */}
          <div className="w-full flex flex-col md:flex-row justify-center gap-10 pb-12">
            <img
              src="/assets/register-btn.png"
              alt=""
              className="hover:scale-[1.04] transition-all ease-in-out hover:cursor-pointer"
            />
            <img
              src="/assets/api-btn.png"
              alt=""
              className="hover:scale-[1.04] transition-all ease-in-out hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
