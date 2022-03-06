import React, { useState } from "react";
import { Header } from "./Header";
import { Drawer } from "../drawer/Drawer";

export const HeaderNav: React.FC = () => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <>
      <Drawer isOpen={menuOpen} toggle={() => toggleMenu(!menuOpen)} />
      <Header toggle={() => toggleMenu(!menuOpen)} />
    </>
  );
};
