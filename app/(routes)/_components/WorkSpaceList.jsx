"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignCenter, LayoutGridIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WorkSpaceList = () => {
  const { user } = useUser();
  const [WorkSpaceList, setWorkSpaceList] = useState([]);
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Hello, {user?.fullName}</h2>
        <Link href={"/createworkspace"}>
          {" "}
          <Button>Add</Button>
        </Link>
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="font-medium text-primary text-lg">Workspaces</h2>
          <div className="flex gap-2">
            <LayoutGridIcon />
            <AlignCenter />
          </div>
        </div>
      </div>
      {WorkSpaceList?.length === 0 ? (
        <div className="flex flex-col justify-between items-center my-10">
          <Image
            src={"/workspace.png"}
            width={200}
            height={200}
            alt="workspace"
          ></Image>
          <h2 className="font-medium">Create a new WorkSpace</h2>
          <Link href={"/createworkspace"}>
            <Button className="my-3">
              Add New WorkSpace
            </Button>
          </Link>
        </div>
      ) : (
        <div>WorkSpaceList</div>
      )}
    </div>
  );
};

export default WorkSpaceList;
