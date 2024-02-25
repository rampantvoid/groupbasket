import FooterMenu from "./FooterMenu";

// Add footer menu items here
const menu: Array<{
  name: string;
  options: Array<{ name: string; linkTo: string; target?: string }>;
}> = [
  {
    name: "Get to know us",
    options: [
      { name: "About us", linkTo: "/about" },
      { name: "Carrers", linkTo: "/carrers" },
      { name: "Press Release", linkTo: "/press-release" },
    ],
  },
  {
    name: "connect with us",
    options: [
      { name: "Facebook", linkTo: "https://google.com", target: "_blank" },
      { name: "Twitter", linkTo: "https://google.com", target: "_blank" },
      { name: "Instagram", linkTo: "https://google.com", target: "_blank" },
    ],
  },
  {
    name: "make money with us",
    options: [
      { name: "Sell on GroupDeals", linkTo: "/" },
      { name: "Sell under GroupDeals Accelerator", linkTo: "/" },
      { name: "GroupDeals Global Selling", linkTo: "/" },
      { name: "Become an Affiliate", linkTo: "/" },
      { name: "Fullfilment by GroupDeals", linkTo: "/" },
      { name: "Adevertise your Products", linkTo: "/" },
      { name: "Epay on Merchants", linkTo: "/" },
    ],
  },
  {
    name: "let us help you",
    options: [
      { name: "COVID-19 and GroupDeals", linkTo: "/" },
      { name: "Your Account", linkTo: "/" },
      { name: "Return Center", linkTo: "/" },
      { name: "100% Purchase Protection", linkTo: "/" },
      { name: "GroupDeals App Download", linkTo: "/" },
      { name: "Group Assistant Download", linkTo: "/" },
      { name: "Help", linkTo: "/" },
    ],
  },
];

const Footer = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col w-full text-black">
      <div className="w-full bg-[#C4C4C4] flex justify-center">
        <div className="xl:mx-32 w-full flex flex-col p-8 gap-16">
          {/* back to top */}
          <div className="flex justify-center w-full">
            <p
              className="font-bold hover:cursor-pointer"
              onClick={() => toTop()}
            >
              Back to top
            </p>
          </div>
          {/* menu */}
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:justify-evenly">
            {menu.map((menuItem) => (
              <FooterMenu title={menuItem.name} options={menuItem.options} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-black flex flex-col items-center text-white text-center">
        <p>Conditions of Use & Sale, Privacy Notice, Interest-Based Ads</p>
        <p>©2024, groupbasket.com</p>
      </div>
    </div>
  );
};

export default Footer;
