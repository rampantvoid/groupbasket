import SlideIndicator from "@/components/SlideIndicator";
import SponsoredDeals from "@/components/SponsoredDeals";
import { CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "@/components/Loading";

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

const Home = () => {
  const [activeIndex, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>();

  const [api, setApi] = React.useState<CarouselApi>();

  const scroll = (index: number) => {
    api?.scrollTo(index);
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://65dafdac3ea883a15290faca.mockapi.io/api/v1/products`
      );

      const filteredProducts = response.data.filter(
        (product: any) => product.id < 7
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="border-b-2 border-[var(--border-btm)] bg-[var(--main-background)] flex justify-center text-[var(--primary-text)]">
        <div className="w-full p-2 2xl:mx-32 flex">
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
      <div className="bg-[var(--main-background)] w-full flex justify-center text-[var(--primary-text)]">
        <div className="w-full p-8 2xl:mx-64 flex flex-col gap-8 md:gap-14">
          {/* deals */}
          <div className="w-full flex flex-col">
            <p className="font-bold text-xl ">Deals closing soon!</p>
            <ScrollArea className="w-full">
              <div className="flex w-max py-8 px-4 gap-8 mx-auto">
                {products &&
                  products.map((product: any, key: any) => (
                    <Link to={`/product/${product.id}`} className="" key={key}>
                      <div className="bg-[var(--secondary-background)] p-4 w-64 rounded-md shadow-md flex flex-col gap-3 items-center  hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out ">
                        <img
                          src={product.preview_img}
                          alt=""
                          className="h-[150px] w-[150px] object-contain"
                        />

                        <p className="text-sm line-clamp-2 mt-4">
                          {product.description}
                        </p>

                        <p className="w-full font-bold flex justify-between items-center">
                          &#8377; {product.cost}.00{" "}
                          <span className="text-sm font-light">
                            MRP &#8377; {product.market_cost}.00
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

            <ScrollArea className="w-full ">
              <div className="flex w-max p-8 gap-14 mx-auto">
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
              <div className="flex w-max py-8 px-4 gap-8 mx-auto">
                {products &&
                  products.map((product: any, key: any) => (
                    <Link to={`/product/${product.id}`} className="" key={key}>
                      <div className="bg-[var(--secondary-background)] p-4 w-64 rounded-md shadow-md flex flex-col gap-3 items-center  hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out ">
                        <img
                          src={product.preview_img}
                          alt=""
                          className="h-[150px] w-[150px] object-contain"
                        />

                        <p className="text-sm line-clamp-2 mt-4">
                          {product.description}
                        </p>

                        <p className="w-full font-bold flex justify-between items-center">
                          &#8377; {product.cost}.00{" "}
                          <span className="text-sm font-light">
                            MRP &#8377; {product.market_cost}.00
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
