import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <NavBar
        items={[
          "Women's",
          "Men's",
          "On the Street",
          "The Catwalk",
          "AdWatch",
          "About",
        ]}
      />
    </header>
  );
};
