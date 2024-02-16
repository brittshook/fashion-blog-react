import { Link } from "./Link";

type Props = {
  items: string[];
};

export const FooterLinks = ({ items }: Props) => {
  return (
    <div>
      {items.map((navItem, i) => (
        <Link key={i} type="footer">
          {navItem}
        </Link>
      ))}
    </div>
  );
};
