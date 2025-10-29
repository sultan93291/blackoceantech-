import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo-header.png";

const navLink = [
  {
    label: "About Us",
    redirectLink: "about-us",
  },
  {
    label: "Products",
    redirectLink: "products",
  },
  {
    label: "Why Choose Us",
    redirectLink: "why-choose-us",
  },
  {
    label: "Contact Us",
    redirectLink: "contact-us",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <nav className="h-auto w-full py-8 fixed top-0 left-0 z-20">
      <div className="h-auto w-full container flex flex-row justify-between">
        <img
          src={logo}
          alt="logo"
          className="max-w-[264px] max-h-[50px] h-full w-full object-cover"
        />
        <ul className="flex flex-row gap-x-12 items-center">
          {navLink.map((nav, idx) => (
            <li
              key={idx}
              className={`hover:text-white cursor-pointer ease-in-out duration-500 text-base font-normal ${
                active === nav.label ? "text-white" : "text-primary-gray"
              }`}
            >
              <Link
                to={nav.redirectLink}
                // smooth={true}
                duration={500}
                onClick={() => setActive(nav.redirectLink)}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
