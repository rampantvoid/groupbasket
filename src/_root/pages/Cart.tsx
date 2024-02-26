import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="w-full bg-[var(--main-background)] min-h-screen flex justify-center">
      <div className="flex 2xl:mx-40 p-3 lg:p-8 w-full lg:flex-row flex-col gap-2 lg:gap-0">
        {/* items */}
        <div className="flex flex-col w-full gap-4">
          <p className="text-2xl font-extrabold w-full">Cart</p>
          <div className="flex flex-col w-full gap-3">
            <div className="flex bg-[var(--secondary-background)] p-4 gap-8">
              <img
                src="/assets/ps-image.png"
                alt=""
                className=" w-28 h-28 lg:w-32 lg:h-32 object-contian bg-gray-200"
              />
              <div className="flex justify-between w-full lg:flex-row flex-col">
                <div className="flex flex-col justify-between p-2">
                  <div>
                    <p className="font-bold lg:text-lg">Sony Playstation 5</p>
                    <p className="line-clamp-1 text-sm lg:line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, rem.
                    </p>
                  </div>

                  <p className="text-gray-400 underline hover:cursor-pointer">
                    Remove
                  </p>
                </div>
                <div className="p-2 flex">
                  <p>&#8377;</p>
                  <p>24,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* summary */}
        <div className="flex flex-col lg:w-1/3 lg:px-2 gap-4">
          <p className="text-2xl font-extrabold">Summary</p>
          <div className="">
            <div className="bg-[var(--secondary-background)] p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-bold">Subtotal</p>
                <p>&#8377; 24,000.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Delivery Cost</p>
                <p>&#8377; 100.00</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="border"></div>

                <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p>&#8377; 24,100.00</p>
                </div>

                <div className="border"></div>
              </div>

              <Button>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
