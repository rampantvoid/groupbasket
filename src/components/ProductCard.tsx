import { Link } from "react-router-dom";
import { Progress } from "./ui/progress";

const ProductCard = ({
  productId,
  thumbnail,
  description,
}: {
  productId: string;
  thumbnail: string;
  description: string;
}) => {
  return (
    <Link to={`/product/${productId}`}>
      <div className="bg-[var(--secondary-background)] p-4 h-[350px] justify-center w-64 rounded-md shadow-md flex flex-col gap-3 items-center hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out ">
        <img
          src={thumbnail}
          alt=""
          className="h-[150px] w-[150px] object-contain"
        />

        <p className="text-sm line-clamp-2 mt-4">{description}</p>

        <p className="w-full font-bold flex justify-between items-center">
          &#8377; 54,990.00{" "}
          <span className="text-sm font-light">MRP &#8377; 76,990.00</span>
        </p>
        <div className="w-full">
          <Progress value={78} className="h-3" />
          <p className="w-full text-sm">78% Claimed</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
