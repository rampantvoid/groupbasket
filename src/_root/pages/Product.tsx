import Loading from "@/components/Loading";
import PreviewSlider from "@/components/PreviewSlider";
import ProductSlider from "@/components/ProductSlider";
import SlideIndicator from "@/components/SlideIndicator";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { ThemeProvider } from "@/contexts/theme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [activeIndex, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  const getProduct = async (productId: any) => {
    try {
      const data = await fetch(
        `https://65dafdac3ea883a15290faca.mockapi.io/api/v1/products/${productId}`
      );

      const p = await data.json();

      setProduct(p);

      setLoading(!loading);
    } catch (err) {
      console.log(err);
    }
  };

  const scroll = (index: number) => {
    api?.scrollTo(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
    if (product === null) {
      getProduct(productId);
    }
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    console.log(api.scrollSnapList());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full bg-[var(--main-background)] flex justify-center text-[var(--primary-text)]">
            <div className="flex 2xl:mx-28 w-full justify-evenly px-8 py-10 lg:flex-row flex-col">
              <SlideIndicator
                slides={scrollSnaps}
                scroll={scroll}
                activeIndex={activeIndex}
              />

              {/* product gallery */}
              <div className="flex flex-col gap-4 justify-center">
                <div>
                  <p className="text-xl md:text-4xl font-md">{product.title}</p>
                  <p className="text-2xl md:text-5xl font-extrabold text-[var(--secondary-text)]">
                    {product.subtitle}
                  </p>
                </div>
                <ProductSlider images={product.images} setApi={setApi} />

                <PreviewSlider
                  images={product.images}
                  scroll={scroll}
                  activeIndex={activeIndex}
                />

                {/* theme selector */}
                <div className="flex gap-3 p-2">
                  <div
                    className="w-6 h-6 border-[var(--primary-text)] bg-black rounded-lg border-black border-2 hover:cursor-pointer hover:ring-2 ring-offset-2 transition-all ease-in-out"
                    onClick={darkTheme}
                  ></div>
                  <div
                    className="w-6 h-6 border-[var(--primary-text)] bg-white rounded-lg border-black border-2 hover:cursor-pointer hover:ring-2 ring-offset-2 transition-all ease-in-out"
                    onClick={lightTheme}
                  ></div>
                </div>
              </div>

              {/* product info */}
              <div className="flex flex-col gap-5 lg:px-4">
                <div>
                  <p className="text-xl font-bold">About this item</p>
                  <p>
                    Next wave of invites will be sent on 11/11/2022 to
                    qualifying customers. While supplies lasts.
                  </p>
                  <p className="font-semibold">Model Number CFI-1215AXXXXXX</p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Stunning games</p>
                  <p>
                    Marvel at incredible graphics and experience new PS5
                    features.
                  </p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Breathtaking Immersion</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident voluptate ratione voluptas ipsa.
                  </p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Lightning Speed</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit eum assumenda quibusdam omnis, voluptatem placeat.
                  </p>
                </div>

                {/* Price */}
                <div className="bg-[var(--btn-background)] rounded-lg px-4 py-4 flex gap-2 xl:w-1/3 justify-between text-[var(--btn-text)]">
                  <p className=" font-bold">&#8377; 24,000.00</p>
                  <p className=" font-light line-through"> &#8377; 31,500</p>
                </div>

                {/* Completed orders */}
                <Progress value={48} className="xl:w-[40%] bg-gray-300 " />
                <p className="text-lg font-bold">48% orders completed</p>

                {/* TnC */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 hover:cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>

                {/* Enter Deal */}
                <Button className="xl:w-1/4 py-6 px-8 rounded-full bg-[#FFBA00] text-black font-bold text-lg shadow-md hover:bg-yellow-500  border-none">
                  Enter Deal
                </Button>

                <p className="font-light">
                  PS: Item will be delivered to your address within 5 days after
                  100% completion of deal
                </p>
              </div>

              {/* product rating */}
              <div className="flex flex-col lg:items-end mt-5 lg:mt-0">
                <Rating
                  readonly
                  initialValue={4.6}
                  size={22}
                  SVGclassName="inline-block"
                  allowFraction
                />
                <p className="font-bold lg:text-right">Average 4.6</p>
                <p className="font-light text-sm lg:text-right">
                  From all the channels
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[var(--main-background)] flex justify-center">
            <div className="flex 2xl:mx-28 w-full items-center justify-center px-8 py-10 lg:flex-row flex-col gap-5">
              <img
                src="/assets/register-btn.png"
                alt=""
                className="hover:scale-[1.04] transition-all ease-in-out hover:cursor-pointer w-80 lg:w-none"
              />
              <img
                src="/assets/api-btn.png"
                alt=""
                className="hover:scale-[1.04] transition-all ease-in-out hover:cursor-pointer w-80 lg:w-none"
              />
            </div>
          </div>
        </>
      )}
    </ThemeProvider>
  );
};

export default Product;
