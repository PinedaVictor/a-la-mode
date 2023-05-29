import React, { useState } from "react";
import { Header } from "./Header";
import { Drawer } from "../drawer/Drawer";
import { FullScreen } from "../springs/FullScreen";
import { Trails } from "../springs/Trails";
import { ContactForm } from "../atomic/molecules/ContactForm";
import { Input, TextArea } from "../atomic/atoms";
import { Comment } from "../elements/clients/Comment";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const HeaderNav: React.FC = () => {
  const [menuOpen, toggleMenu] = useState(false);
  const [contact, toggleContact] = useState(false);
  return (
    <>
      <Drawer isOpen={menuOpen} toggle={() => toggleMenu(!menuOpen)} />
      <FullScreen
        isOpen={contact}
        toggle={() => toggleContact(!contact)}
        color="blue"
      >
        <Trails>
          <div className=" w-screen flex align-middle justify-center">
            <div className=" bg-offWhite w-80 pt-9">
              <ContactForm />
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div />
          <div />
          <div />
        </Trails>
      </FullScreen>
      <Header
        toggleNav={() => toggleMenu(!menuOpen)}
        toggleContact={() => toggleContact(!contact)}
      />
    </>
  );
};
