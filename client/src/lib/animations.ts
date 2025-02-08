import { gsap } from "gsap";

export const fadeUpAnimation = (element: HTMLElement) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
};

export const staggerAnimation = (elements: HTMLElement[]) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: elements[0],
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
};
