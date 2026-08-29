import React, { createContext, useContext, useState } from "react";

type ContactModalContextValue = {
  isOpen: boolean;
  toggleContact: () => void;
};

export const ContactModalContext = createContext<ContactModalContextValue>({
  isOpen: false,
  toggleContact: () => {}
});

export const useContactModal = () => useContext(ContactModalContext);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContact = () => setIsOpen((prev) => !prev);

  return (
    <ContactModalContext.Provider value={{ isOpen, toggleContact }}>
      {props.children}
    </ContactModalContext.Provider>
  );
};
