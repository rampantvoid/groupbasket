import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Progress } from "./ui/progress";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
// import Autoplay from "embla-carousel-autoplay";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const dealItems = [
  { title: "Sony", subtitle: "Playstation 5", image: "/assets/ps-image.png" },
  { title: "Sony", subtitle: "Playstation 5", image: "/assets/ps-image.png" },
  { title: "Sony", subtitle: "Playstation 5", image: "/assets/ps-image.png" },
  { title: "Sony", subtitle: "Playstation 5", image: "/assets/ps-image.png" },
  { title: "Sony", subtitle: "Playstation 5", image: "/assets/ps-image.png" },
];

const SponsoredDeals = ({ setApi }: { setApi: any }) => {
  const [width] = useWindowSize();
  const [progress] = useState(48);

  return (
    <Carousel
      orientation={width > 640 ? "vertical" : "horizontal"}
      className="w-full"
      setApi={setApi}
      // plugins={[
      //   Autoplay({
      //     delay: 3000,
      //   }),
      // ]}
      opts={{ loop: true }}
    >
      <CarouselContent className="w-full h-[550px] mt-0 ml-0">
        {dealItems.map((item, key) => (
          <Link
            to="/product/7"
            key={key}
            className="min-w-0 shrink-0 grow-0 basis-full h-full m-0 p-0"
          >
            <CarouselItem className="h-full m-0 p-0">
              <div className="w-full flex justify-center md:justify-between h-full md:p-10">
                <div className="w-full md:w-auto flex flex-col items-center md:items-start md:justify-between">
                  <p className="p-8 pt-0 capitalize text-[var(--text-muted)] scroll-m-20 text-5xl md:text-6xl font-extrabold tracking-tight 2xl:text-8xl">
                    sponsored deal
                  </p>
                  <div className="flex justify-center md:hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-1/2 object-contain"
                    />
                  </div>
                  <div className="p-8 w-full">
                    <p className="text-xl md:text-4xl font-md">{item.title}</p>
                    <p className="text-2xl md:text-5xl font-extrabold text-[var(--secondary-text)]">
                      {item.subtitle}
                    </p>
                    <div className="p-4 mt-4 bg-[var(--btn-background)] text-[var(--btn-text)] w-56 rounded-lg shadow-md flex justify-between items-center">
                      <p className="font-extrabold">&#8377; 24,990.00</p>
                      <p className="text-sm font-light">&#8377; 31,990.00</p>
                    </div>

                    <div className="flex flex-col w-full gap-2 mt-4">
                      <Progress
                        value={progress}
                        className="xl:w-1/2 bg-[#D9D9D9] "
                      />
                      <p className="text-lg font-bold">
                        {progress}% orders completed
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  src={item.image}
                  alt=""
                  className="hidden md:block max-w-full object-contain"
                />

                <div className="md:flex flex-col items-end hidden">
                  <Rating
                    readonly
                    initialValue={4.6}
                    size={22}
                    SVGclassName="inline-block"
                    allowFraction
                  />
                  <p className="font-bold text-right">Average 4.6</p>
                  <p className="font-light text-sm text-right">
                    From all the channels
                  </p>
                </div>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SponsoredDeals;
