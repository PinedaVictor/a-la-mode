import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <header className="bg-offBlack w-screen h-16 sticky top-0 z-50">
        <div className="flex flex-row right-0 absolute bg-yellow">
          <div>Menu option</div>
          <div>Logo/Icon</div>
        </div>
      </header>
    </>
  );
};
