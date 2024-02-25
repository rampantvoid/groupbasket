import { Link } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// add categories here
const categoryList = [
  { name: "All", linkTo: "/all" },
  { name: "Sell", linkTo: "/sell" },
  { name: "Best Seller", linkTo: "/best-seller" },
  { name: "Mobile", linkTo: "/mobile" },
  { name: "Today's Deal", linkTo: "/todays-deal" },
  { name: "Electronics", linkTo: "/electronics" },
  { name: "Home & Kitchen", linkTo: "/home&kitchen" },
  { name: "Shoes", linkTo: "/shoes" },
  { name: "Clothes", linkTo: "/clothes" },
  { name: "Grocery", linkTo: "/grocery" },
];

const Categories = () => {
  return (
    <div className="w-full bg-[var(--nav-color)] text-[var(--nav-text)] flex justify-center">
      <div className="w-full p-3 2xl:mx-32 flex">
        {/* desktop */}
        <ul className="lg:flex hidden lg:flex-row w-full justify-evenly">
          {categoryList.map((item) => (
            <Link
              to={item.linkTo}
              className={`hover:bg-[var(--text-muted)] hover:text-[var(--btn-text)] transition-all ease-in-out py-3 xl:w-full text-center ${
                window.location.pathname === item.linkTo ? "font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* mobile */}
        <ScrollArea className="lg:hidden">
          <div className="flex w-max gap-8">
            {categoryList.map((item) => (
              <Link
                to={item.linkTo}
                className={`hover:bg-[var(--text-muted)] hover:text-[var(--btn-text)] transition-all ease-in-out py-3 xl:w-full text-center ${
                  window.location.pathname === item.linkTo ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Categories;
