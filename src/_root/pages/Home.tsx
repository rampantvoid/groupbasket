import SlideIndicator from "@/components/SlideIndicator";
import SponsoredDeals from "@/components/SponsoredDeals";
import { CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";

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
    <div className="min-h-dvh bg-[#F7F7F7] flex justify-center">
      <div className="w-full p-2 2xl:mx-32 md:max-h-[50vh] flex">
        <SlideIndicator
          slides={scrollSnaps}
          scroll={scroll}
          activeIndex={activeIndex}
        />
        <SponsoredDeals setApi={setApi} />
      </div>
    </div>
  );
};

export default Home;
