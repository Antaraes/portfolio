import { useState, useEffect } from "react";

interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: "up" | "down" | undefined;
}

export function useScroll(): ScrollState {
  // Storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  // The offset of the document.body
  const [bodyOffset, setBodyOffset] = useState<DOMRect>(document.body.getBoundingClientRect());

  // The vertical direction
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);

  // The horizontal direction
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);

  // Scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | undefined>();

  const listener = (e: Event) => {
    const newBodyOffset = document.body.getBoundingClientRect();
    setBodyOffset(newBodyOffset);
    setScrollY(-newBodyOffset.top);
    setScrollX(newBodyOffset.left);
    setScrollDirection(lastScrollTop > -newBodyOffset.top ? "down" : "up");
    setLastScrollTop(-newBodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
