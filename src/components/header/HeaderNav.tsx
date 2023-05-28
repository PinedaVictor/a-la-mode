import React, { useState } from "react";
import { Header } from "./Header";
import { Drawer } from "../drawer/Drawer";
import { FullScreen } from "../springs/FullScreen";
import { Trails } from "../springs/Trails";
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
              <form>
                <Trails>
                  <div className=" bg-yellow">
                    <Comment comment="Happy to collaborate!" />
                  </div>
                  <Input
                    label="Name"
                    placeholder="Jane Smith"
                    id="name"
                    name="name"
                  />
                  <Input
                    label="Email"
                    placeholder="JaneSmith@gmail.com"
                    id="email"
                    name="email"
                  />
                  <Input
                    label="Phone Number (optional)"
                    placeholder="(661)-099-9090"
                    id="phone-number"
                    name="phone-number"
                  />
                  <TextArea />
                  <div className=" mt-24 flex justify-end pr-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-x-1.5 rounded-md bg-iGrey px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send
                      <CheckCircleIcon
                        className="-mr-0.5 h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Trails>
              </form>
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
