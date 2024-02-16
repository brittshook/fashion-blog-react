import { Link } from "./Link";

type Props = {
  items: string[];
};

export const NavBar = ({ items }: Props) => {
  return (
    <nav>
      {items.map((navItem, i) => (
        <Link key={i} type="nav">
          {navItem}
        </Link>
      ))}
    </nav>
  );
};
