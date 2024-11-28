"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CoverPicker from "../_components/CoverPicker";
import EmojiPickerComponent from "../_components/EmojiPickerComponent";

const createWorkSpace = () => {
  const [cover, setCover] = useState("/cover.png");
  const [workspaceName, setWorkSpaceName] = useState();
  const [emojiIcon, setEmojiIcon] = useState();
  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px96 py-28">
      <div className="shadow-md rounded-xl">
        {/* cover image */}
        <CoverPicker
          setNewCover={(v) => {
            setCover(v);
          }}
        >
          <div className="relative group cursor-pointer">
            <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center text-black font-medium">
              Change cover
            </h2>
            <div className="group-hover:opacity-40">
              {" "}
              <Image
                src={cover}
                width={400}
                height={400}
                alt="cover"
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
            </div>
          </div>
        </CoverPicker>
        {/* input section */}
        <div className="p-12">
          <h2 className="font-medium text-xl">Create a new workspace</h2>
          <h2 className="text-base mt-2">
            This is a collaborative space where you and your team can work
            together. You can rename it at any time.
          </h2>
          <div className="mt-8 flex items-center gap-2">
            <EmojiPickerComponent setEmojiIcon={(v) => setEmojiIcon(v)}>
              <Button variant="outline">
                {emojiIcon ? emojiIcon : <SmilePlus />}
              </Button>
            </EmojiPickerComponent>
            <Input
              placeholder="Workspace name"
              onChange={(e) => setWorkSpaceName(e.target.value)}
            />
          </div>
          <div className="mt-7 flex justify-end gap-2">
            <Button disabled={!workspaceName?.length}>Create</Button>
            <Button variant="outline">Cancle</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createWorkSpace;
