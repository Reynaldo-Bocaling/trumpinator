import React from "react";
import { navlinks } from "../../constants";
import Button from "../ui/Button";
import Title from "../ui/Title";

const Header = () => {
  return (
    <header>
      <nav className="flexBetween max-w-7xl mx-auto px-4 py-3">
        <Title />
        <ul className="hidden md:flexCenter gap-7  blur_effect py-4 px-12 rounded-full">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white tracking-wider">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button label="Buy Now" />
      </nav>
      <ul className="md:hidden flexCenter gap-7  blur_effect py-4 px-12 rounded-full">
        {navlinks.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="text-white tracking-wider">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
