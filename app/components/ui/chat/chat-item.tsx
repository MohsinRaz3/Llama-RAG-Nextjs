"use client";

import ChatAvatar from "./chat-avatar";
//@ts-ignore
import { Message } from "./chat.interface";

export default function ChatItem(message: Message) {
  return (
    <div className="flex items-start gap-4 pt-5">
      <ChatAvatar {...message} />
      <p className="break-words">{message.content}</p>
    </div>
  );
}
