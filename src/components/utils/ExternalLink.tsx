import React from "react";

interface ExternalLinkProps {
  link: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};
