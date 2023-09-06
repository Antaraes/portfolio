"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Headroom from "react-headroom";
import * as icons from "@/assets/icons";
interface NavbarProps {}
interface CustomeLinkProps {
  href: string;
  title: string;
}
const CustomLink: React.FC<CustomeLinkProps> = ({ href, title }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.8 }}
      className="block py-2 pl-3 pr-4 text-text dark:text-darkText rounded md:bg-transparent md:text-text md:p-0 md:dark:text-darkText dark:bg-darkbackground md:dark:bg-transparent"
    >
      {title}
    </motion.a>
  );
};
interface CustomIconsProps {
  href: string;
  src: StaticImageData;
}
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -600,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.01,
    },
  },
};
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
  const [toggle, setToggle] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0) {
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
    <Headroom>
      <nav
        className={`border-gray-200 bg-background dark:bg-darkBackground dark:border-gray-700 md:top-0 max-md:bottom-0 w-full z-50  `}
      >
        <div className=" w-full md:max-w-screen flex items-center justify-center mx-auto px-2 pb-2 md:p-4  ">
          <div className={` w-full md:block md:w-auto" id="navbar-solid-bg`}>
            {isSmallScreen && (
              <motion.ul
                variants={fadeInAnimationVariants}
                initial="initial"
                animate={!toggle ? "animate" : ""}
                className="flex md:opacity-100 relative transition-all duration-300 ease-in-out  font-medium mt-4 rounded-lg bg-background dark:bg-darkBackground md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-text dark:text-darkText  md:dark:bg-transparent dark:border-gray-700"
              >
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/article" title="Articles" />
                <CustomLink href="/song" title="Song" />
              </motion.ul>
            )}
            {!isSmallScreen && (
              <ul className="flex md:opacity-100 relative transition-all duration-300 ease-in-out  font-medium mt-4 rounded-lg bg-background dark:bg-darkBackground md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-text dark:text-darkText  md:dark:bg-transparent dark:border-gray-700">
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/article" title="Articles" />
                <CustomLink href="/song" title="Song" />
              </ul>
            )}
          </div>
          <div className="md:flex hidden  mx-5 opacity-0 md:opacity-100">
            <Customicons href="/" src={icons.instagram} />
            <Customicons href="/" src={icons.linkedin} />
            <Customicons href="/" src={icons.dribble} />
            <Customicons href="/" src={icons.github} />
            <Customicons href="/" src={icons.youtube} />
            <Customicons href="/" src={icons.twitter} />
          </div>
          {toggle ? (
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              onClick={() => setToggle(!toggle)}
              className={`${toggle ? "block" : "hidden"} block md:hidden`}
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M2 2h9v9H2V2Zm2 2v5h5V4H4Zm13.5 0a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM13 6.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM2 13h9v9H2v-9Zm2 2v5h5v-5H4Zm9-2h9v9h-9v-9Zm2 2v5h5v-5h-5Z"
                />
              </svg>
            </button>
          ) : (
            <button className=" md:hidden" onClick={() => setToggle(!toggle)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
