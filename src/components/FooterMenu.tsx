import { Link } from "react-router-dom";

const FooterMenu = ({
  title,
  options,
}: {
  title: string;
  options: Array<{ name: string; linkTo: string; target?: string }>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold capitalize">{title}</p>

      <ul className="flex flex-col ">
        {options.map((option, key) => (
          <Link
            to={option.linkTo}
            className="capitalize"
            target={option.target}
            key={key}
          >
            {option.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
