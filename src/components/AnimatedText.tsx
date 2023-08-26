"use client";
import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 70 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className="text-4xl font-extrabold leading-none tracking-tight text-text dark:text-darkText md:text-5xl lg:text-6xl"
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [open, set] = useState(true);

  return (
    <div className="flex items-center" onClick={() => set((state) => !state)}>
      <Trail open={open}>
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>{word}</span>
        ))}
      </Trail>
    </div>
  );
};

export default AnimatedText;
