import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import * as icons from "@/assets/icons";
import { Customicons } from "./Navbar";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" py-10 px-32">
      <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 flex-wrap justify-center items-center mt-2">
          <div className="flex gap-5">
            <Customicons href="/" src={icons.instagram} />
            <Customicons href="/" src={icons.linkedin} />
            <Customicons href="/" src={icons.dribble} />
            <Customicons href="/" src={icons.github} />
            <Customicons href="/" src={icons.youtube} />
            <Customicons href="/" src={icons.twitter} />
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              AJM
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
