import React from "react";
import logo from "../assets/logo.svg";

const footerLink = [
  {
    label: "Contact us",
    redirectLink: "/contact-us",
  },
  {
    label: "Privacy policies",
    redirectLink: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    redirectLink: "/terms-and-conditions",
  },
];

const Footer = () => {
  return (
    <footer className="h-auto w-full relative ">
      <div className="container flex flex-col">
        <div className="ml-[400px] flex flex-row justify-between   ">
          <p className=" font-sf-pro text-primary-gray ">
            All Copywrite Reserved By
          </p>
          <ul className="flex flex-row gap-x-12 items-center ">
            {footerLink.map((footer, idx) => {
              return (
                <li
                  key={idx}
                  className=" text-base font-normal text-primary-gray"
                >
                  {" "}
                  {footer.label}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={logo}
          className="w-full h-full max-h-[271px]"
          alt="not found"
        />
      </div>
    </footer>
  );
};

export default Footer;
