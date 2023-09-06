"use client";
import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import Image from "next/image";
import { FC } from "react";
import human from "@/assets/images/portfolio.png";
import portfolio from "@/assets/images/porfoilo2.jpg";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-[90%] mx-auto h-auto overflow-x-hidden  items-center justify-center  m-auto pb-5">
      <section className="md:h-screen h-auto">
        <div className="grid grid-cols-2 gap-3 w-full md:w-[40%]">
          <Image src={human} width={300} height={200} alt="human" />
          <Image src={portfolio} width={300} height={200} alt="human" />
          <Image src={portfolio} width={300} height={200} alt="human" />
          <Image src={portfolio} width={300} height={200} alt="human" />
        </div>
      </section>
      <Skills />
      <Experience />
    </div>
  );
};

export default page;
