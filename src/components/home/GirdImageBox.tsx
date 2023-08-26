import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface GirdImageBoxProps {
  icon: StaticImageData;
  title: string;
  body: string;
}

const GirdImageBox: FC<GirdImageBoxProps> = ({ icon, title, body }) => {
  return (
    <figure className="relative inline-block px-4 py-2 font-medium group w-[400px] ">
      <span className="absolute  w-[90%] h-full transition duration-200 ease-out transform translate-x-1 dark:opacity-0 translate-y-1 bg-darkBackground dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>

      <blockquote className="relative max-w-xl mx-auto mb-4 text-text lg:mb-8 dark:text-gray-400 w-full h-full dark:bg-darkSecondary bg-background border-2 border-black dark:border-white flex flex-col justify-center items-center ">
        <div className="w-full flex items-center justify-center mb-3">
          <Image src={icon} alt={""} width={60} className="" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="my-4">{body}</p>
      </blockquote>
    </figure>
  );
};

export default GirdImageBox;
