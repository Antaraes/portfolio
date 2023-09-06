"use client";
import { experienceData } from "@/lib/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceProps {}
const ExperienceItem = ({ item }: { item: any }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#e6e6e6",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.5)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      date={item.date}
      iconStyle={{ background: "#fff", color: "#000" }}
      icon={<Icon icon={item.icon} />}
    >
      <h3 className="font-bold capitalize text-darkSecondary text-2xl">{item.title}</h3>
      <p className="font-semibold capitalize text-darkSecondary text-lg">{item.job}</p>
      <p className="font-normal mt-0 " onClick={() => setShowMore(!showMore)}>
        {showMore ? item.description : `${item.description.substring(0, 250)}....`}
        <a onClick={() => setShowMore(!showMore)} className="cursor-pointer">
          {!showMore ? "Read More" : ""}
        </a>
      </p>
    </VerticalTimelineElement>
  );
};
const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section className="h-auto">
      <h2>My Experience</h2>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
