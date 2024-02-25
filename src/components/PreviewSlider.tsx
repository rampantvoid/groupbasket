const PreviewSlider = ({
  images,
  scroll,
  activeIndex,
}: {
  images: Array<string>;
  scroll: any;
  activeIndex: number;
}) => {
  return (
    <div className="w-full p-2 flex gap-3">
      {images.map((image, key) => (
        <div
          className={`w-14 h-14 overflow-hidden p-1 flex items-center justify-center border-black border hover:ring-2 ring-offset-2 transition-all ease-in-out ${
            activeIndex === key ? "ring-2 ring-offset-2 ring-[#FF0000]" : ""
          }`}
          key={key}
          onClick={() => scroll(key)}
        >
          <img src={image} alt="" className="object-contain" />
        </div>
      ))}
    </div>
  );
};

export default PreviewSlider;
