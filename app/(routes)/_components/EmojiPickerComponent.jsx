import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
const EmojiPickerComponent = ({ children, setEmojiIcon }) => {
  const [openEmojiPicker, setEmojiPicker] = useState(false);
  return (
    <div>
      <div onClick={() => setEmojiPicker(!openEmojiPicker)}>{children}</div>
      {openEmojiPicker && (
        <div className="absolute z-10">
          <EmojiPicker
            emojiStyle="facebook"
            onEmojiClick={(e) => {
              setEmojiIcon(e.emoji);
              setEmojiPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
