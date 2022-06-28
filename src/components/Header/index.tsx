import React from "react";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <div className="flex w-full h-[6rem] items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </div>
  );
};

export { Header };
