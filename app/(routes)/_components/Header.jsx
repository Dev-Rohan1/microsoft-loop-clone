import React from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="shadow-sm">
      <nav className="flex justify-between items-center px-7 py-7 lg:py-4 lg:px-28 ">
        <Logo />
        <UserButton  />
      </nav>
    </header>
  );
};

export default Header;
