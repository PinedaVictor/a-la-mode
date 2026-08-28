import React from "react";
import { Link } from "@tanstack/react-router";
import { AnimateNav } from "./AnimateNav";
import { FullScreen } from "../springs/FullScreen";

interface DrawerProps {
  toggle: () => void;
  isOpen: boolean;
}
export const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <>
      <FullScreen toggle={props.toggle} isOpen={props.isOpen} color="blue">
        <nav className=" pt-20 text-right ">
          <ul className=" font-[Tommy] text-offBlack text-6xl p-5">
            <AnimateNav>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">home</li>
              </Link>
              <Link
                to="/building"
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">building</li>
              </Link>
              {/* <Link to="/WebApps">
                      <li className=" ">Web Apps</li>
                    </Link> */}
              {/* TODO: Update router */}
              {/* <Link
                to="/projects"
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">Projects</li>
              </Link>
              <Link
                to="/references"
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">References</li>
              </Link> */}
              <Link
                to="/travel"
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">travel</li>
              </Link>
              <Link
                to="/travel-guides"
                activeProps={{ className: "text-orange underline" }}
              >
                <li className=" ">travel guides</li>
              </Link>
              {/* <Link to="/Pixels">
                      <li className=" ">Pixels</li>
                    </Link> */}
            </AnimateNav>
          </ul>
        </nav>
      </FullScreen>
    </>
  );
};
