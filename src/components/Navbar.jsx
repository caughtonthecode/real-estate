import { useState, React, useEffect } from "react";
import { assets } from "./../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setSHowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <a href="/">
          <img src={assets.logo} alt="" />
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projets
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonial
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Signup
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setSHowMobileMenu(true)}
          className="md:hidden w-7"
          alt=""
        />
      </div>
      {/* ------------- mobile-menu---------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            onClick={() => setSHowMobileMenu(false)}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center mt-5 gap-2 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSHowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSHowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSHowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setSHowMobileMenu(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
