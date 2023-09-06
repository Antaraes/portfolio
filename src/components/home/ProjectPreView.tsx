import { StaticImageData } from "next/image";
import Image from "next/image";

import { FC } from "react";

interface ProjectPreViewProps {
  title: string;
  body: string;
  preImg?: StaticImageData | string;
  tabs: string[];
}

const ProjectPreView: FC<ProjectPreViewProps> = ({ preImg, title, body, tabs }) => {
  return (
    <div className="card card-side bg-base-200 shadow-xl w-[200px] md:w-full  h-[200px] md:h-full">
      <figure>{preImg && <Image src={preImg} width={200} alt="preImge" />}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <a key={index} className="tab md:tab-lg tab-lifted tab-xs">
              {tab}
            </a>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-primary p-2 text-xs hover:bg-secondary text-darkText hover:text-text">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreView;
