const SlideIndicator = ({
  slides,
  scroll,
  activeIndex,
}: {
  slides: Array<number>;
  scroll: any;
  activeIndex: number;
}) => {
  return (
    <div className="lg:flex-col justify-center gap-5 lg:flex hidden p-8">
      {slides.map((_, index) => (
        <span
          key={index}
          onClick={() => scroll(index)}
          className={`w-3 h-3 mx-2 cursor-pointer rounded-full border-[#828282] border ${
            index === activeIndex
              ? "bg-[#FF0000] shadow-black shadow-lg"
              : "bg-gray-100"
          }`}
        ></span>
      ))}
    </div>
  );
};

export default SlideIndicator;
