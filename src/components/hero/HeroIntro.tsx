import { type FC, useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "@react-spring/web";
import { ExternalLink } from "../atomic/atoms";

const SCROLL_THRESHOLD = 20;

export const HeroIntro: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lines = [
    <span>hi, I'm Victor</span>,
    <span className="block text-3xl">
      {"dev, art, travel, "}
      <span className="underline text-orange font-bold">
        <ExternalLink link="https://buymeacoffee.com/victorpineda">
          coffee?
        </ExternalLink>
      </span>
    </span>
  ];

  const trail = useTrail(lines.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -40 }
  });

  // Slides "hi, I'm Victor" up and out as soon as the user starts scrolling.
  const nameLeaving = useSpring({
    opacity: scrolled ? 0 : 1,
    y: scrolled ? -30 : 0,
    config: { tension: 280, friction: 32 }
  });

  // Once the name has cleared out, fade the whole chip away so the
  // permanent tagline in the header (HeaderTagline) is left showing
  // in the same top-left corner.
  const boxLeaving = useSpring({
    opacity: scrolled ? 0 : 1,
    config: { tension: 220, friction: 32 },
    delay: scrolled ? 300 : 0
  });

  return (
    <animated.div
      style={boxLeaving}
      className="fixed top-0 left-0 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto inline-block bg-yellow font-BR text-offBlack text-5xl min-[393px]:text-6xl md:text-7xl lg:text-8xl px-3 py-2">
        <animated.div
          style={{ ...trail[0], ...nameLeaving }}
          className="overflow-hidden"
        >
          {lines[0]}
        </animated.div>
        <animated.div style={trail[1]}>{lines[1]}</animated.div>
      </div>
    </animated.div>
  );
};
