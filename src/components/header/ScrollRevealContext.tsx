import React, { createContext, useContext, useState } from "react";

type ScrollRevealContextValue = {
  chatRevealed: boolean;
  setChatRevealed: (revealed: boolean) => void;
};

export const ScrollRevealContext = createContext<ScrollRevealContextValue>({
  chatRevealed: true,
  setChatRevealed: () => {}
});

export const useScrollReveal = () => useContext(ScrollRevealContext);

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  // Defaults to visible so every page shows the header chat bubble. Home is
  // the only page that hides it initially (via Announcements, below) until
  // the user scrolls past its own chat CTA.
  const [chatRevealed, setChatRevealed] = useState(true);

  return (
    <ScrollRevealContext.Provider value={{ chatRevealed, setChatRevealed }}>
      {props.children}
    </ScrollRevealContext.Provider>
  );
};
