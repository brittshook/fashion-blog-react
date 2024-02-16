type Props = {
  type: "nav" | "footer";
  children: string;
};

export const Link = ({ type, children }: Props) => {
  return (
    <a href="#test" className={type === "nav" ? "nav-link" : "footer-link"}>
      {children}
    </a>
  );
};
