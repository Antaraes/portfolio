import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { app_development } from "@/assets/icons";
import GirdImageBox from "@/components/home/GirdImageBox";
import human from "@/assets/images/human.jpg";
import ContributionsTable from "@/components/Contributions";
import ProjectPreView from "@/components/home/ProjectPreView";

export default function Home() {
  return (
    <>
      <section className=" md:flex h-auto overflow-x-hidden  items-center justify-center w-full m-auto pb-5">
        <div className=" w-full md:w-1/2">
          <Image src={human} alt="profile" className="w-full " />
        </div>
        <div className="w-full md:w-1/2  flex flex-col items-start ">
          <h4 className="mb-3 text-transparent bg-clip-text bg-gradient-to-r to-primary from-accent md:text-5xl lg:text-6xl">
            Hi, my name is
          </h4>
          <AnimatedText text="Min Bhone Thant" />
          <p className="mb-3 mt-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
            Possesses the ability to self-learn and continuously improve technical skills,
            demonstrated through diverse range of self-taught knowledge. Experienced in various
            programming languages and design tools, showcasing adaptability and versatility.
            Currently enrolled in NCC computing Diploma program to further education and skills in
            the IT industry. Seeking opportunities to utilize skills and knowledge to make a
            positive impact in the field.
          </p>
          <div className="flex items-start self-start mt-2 mx-4 gap-10">
            <Link
              href="/Rsume.pdf"
              target={"_black"}
              download={true}
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Resume</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
            <Link
              href="mailto:minbhonethantajm@gmail.com"
              target={"_black"}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-lg">
                Contact
              </span>
            </Link>
            <Link
              href="mailto:minbhonethantajm@gmail.com"
              target={"_black"}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-lg">
                Read More
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Header Section  */}
      {/* Start Trending Section  */}
      <section className="flex mx-3 gap-3  h-auto md:h-screen">
        <div className="w-1/2 space-y-3">
          <div className="h-3/4  rounded-xl dark:bg-darkBackground bg-background border-2 border-black dark:border-white ">
            <h1>Current Project</h1>
          </div>
          <div className="h-1/4 rounded-xl dark:bg-darkBackground bg-background border-2 border-black dark:border-white ">
            <p>Music</p>
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="h-3/4  rounded-xl overflow-hidden dark:bg-darkBackground bg-background border-2 border-black dark:border-white">
            <Image
              src={"https://i.pinimg.com/564x/9a/b5/30/9ab530050c345ae3992db104e6ef287d.jpg"}
              alt={""}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-1/4 rounded-xl dark:bg-darkBackground bg-background border-2 border-black dark:border-white ">
            <p>Github Currently</p>
          </div>
        </div>
      </section>

      {/* End Trending Section  */}
      {/* Start Services Section  */}
      <section className="  space-y-5 h-auto gap-4 w-full md:w-[80%] m-auto flex flex-col items-center justify-center dark:text-darkText text-text px-10 py-5">
        <p className=" text-center text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
          What Can I do?
        </p>
        <p className="text-center tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, obcaecati!
        </p>
        <div className="grid md:flex  gap-10 ">
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
          <GirdImageBox icon={app_development} title={"Web development"} body="I can work" />
        </div>
      </section>
      {/* End Services Section  */}
      {/* Start Project Section  */}
      <section className="w-[80%] m-auto h-auto md:h-screen">
        <div className="flex justify-between items-center mb-4">
          <p className="text-center text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
            Take a look at my recent projects
          </p>
          <p className="text-center tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
            Here is what I do
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          <ProjectPreView
            title="Ticket System"
            body="Somethiing"
            tabs={["React", "Next Js", "Python"]}
          />
          <ProjectPreView
            title="Ticket System"
            body="Somethiing"
            tabs={["React", "Next Js", "Python"]}
          />
          <ProjectPreView
            title="Ticket System"
            body="Somethiing"
            tabs={["React", "Next Js", "Python"]}
          />
        </div>
      </section>
      {/* End Project Section  */}
    </>
  );
}
