import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export function scrambleTitles(container: string) {
  gsap.utils.toArray<HTMLElement>(`${container} h2`).forEach((title, i) => {
    gsap.set(title, { visibility: "hidden" });

    gsap.to(title, {
      duration: 2,
      delay: i * 0.25,
      scrambleText: {
        text: title.textContent?.trim() ?? "",
        chars: "upperAndLowerCase",
        revealDelay: 0.5,
        speed: 0.4,
      },
      onStart: () => {
        gsap.set(title, { visibility: "visible" });
      },
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });
}
