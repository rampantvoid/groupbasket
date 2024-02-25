import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const ProductSlider = ({
  images,
  setApi,
}: {
  images: Array<string>;
  setApi: any;
}) => {
  return (
    <div>
      <Carousel orientation="vertical" setApi={setApi}>
        <center>
          <CarouselContent className="h-[400px] max-w-[500px]">
            {images.map((image, key) => (
              <CarouselItem
                className="h-full items-center lg:justify-normal justify-center flex"
                key={key}
              >
                <img className="object-contain max-h-[400px]" src={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </center>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
