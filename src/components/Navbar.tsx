"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as icons from "@/assets/icons";
interface NavbarProps {}
interface CustomeLinkProps {
  href: string;
  title: string;
}
const CustomLink: React.FC<CustomeLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-text rounded md:bg-transparent md:text-text md:p-0 md:dark:text-darkText dark:bg-darkbackground md:dark:bg-transparent"
    >
      {title}
    </Link>
  );
};
interface CustomIconsProps {
  href: string;
  src: StaticImageData;
}
export const Customicons: React.FC<CustomIconsProps> = ({ href, src }) => {
  return (
    <motion.a
      href={href}
      target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.8 }}
      className="w-6 mr-3"
    >
      <Image src={src} width={20} alt="" />
    </motion.a>
  );
};
const Navbar: FC<NavbarProps> = ({}) => {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavbarSolid(true);
    } else {
      setIsNavbarSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div className=" flex justify-between items-center">

    // </div>

    <nav
      className={`border-gray-200 bg-background dark:bg-darkBackground dark:border-gray-700 fixed top-0 w-full z-50  `}
    >
      <div className=" w-full md:max-w-screen flex flex-wrap items-center justify-between mx-auto p-4  ">
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/article" title="Articles" />
            <CustomLink href="/song" title="Song" />
          </ul>
        </div>
        <div className="flex mx-5 opacity-0 md:opacity-100">
          <Customicons href="/" src={icons.instagram} />
          <Customicons href="/" src={icons.linkedin} />
          <Customicons href="/" src={icons.dribble} />
          <Customicons href="/" src={icons.github} />
          <Customicons href="/" src={icons.youtube} />
          <Customicons href="/" src={icons.twitter} />
        </div>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="  p-2 w-10 h-10 items-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 flex  dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
