"use client";
import React from "react";
import Logo from "./Logo";
import { OrganizationSwitcher, UserButton, useAuth } from "@clerk/nextjs";

const Header = () => {
  const { orgId } = useAuth();
  console.log(orgId);
  return (
    <header className="shadow-sm">
      <nav className="flex justify-between items-center px-7 py-7 lg:py-4 lg:px-28 ">
        <Logo />
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/dashboard"}
          afterLeaveOrganizationUrl="/dashboard"
        />
        <UserButton />
      </nav>
    </header>
  );
};

export default Header;
