import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer>
      <FooterLinks
        items={[
          "Home",
          "Women's",
          "Men's",
          "On the Street",
          "The Catwalk",
          "AdWatch",
          "About",
          "Tips",
        ]}
      />
      <p>© 2013 Valet Industries, Inc</p>
    </footer>
  );
};
