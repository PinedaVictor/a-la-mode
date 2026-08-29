import React, { useState } from "react";
import { Header } from "./Header";
import { Drawer } from "../drawer/Drawer";
import { FullScreen } from "../springs/FullScreen";
import { ContactForm } from "../atomic/molecules/ContactForm";
import { useContactModal } from "./ContactModalContext";

export const HeaderNav: React.FC = () => {
  const [menuOpen, toggleMenu] = useState(false);
  const { isOpen: contact, toggleContact } = useContactModal();
  return (
    <>
      <Drawer isOpen={menuOpen} toggle={() => toggleMenu(!menuOpen)} />
      <FullScreen isOpen={contact} toggle={toggleContact} color="blue">
        <div className=" w-screen flex align-middle justify-center">
          <div className=" bg-offWhite w-80 pt-9">
            <ContactForm />
          </div>
        </div>
      </FullScreen>
      <Header
        toggleNav={() => toggleMenu(!menuOpen)}
        toggleContact={toggleContact}
      />
    </>
  );
};
