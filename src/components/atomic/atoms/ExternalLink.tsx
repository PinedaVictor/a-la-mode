import React from "react";

interface ExternalLinkProps {
  link: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};
