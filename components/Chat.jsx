"use client";

import React, { useState } from "react";
import { generateChatResponse } from "../utils/actions";
import { useMutation } from "@tanstack/react-query";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { mutate } = useMutation({
    mutationFn: (text) => generateChatResponse(text),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
    console.log(text);
  };
  return (
    <div className="min-h-[calc(100vh-8rem)] grid grid-rows-[1fr,auto] min-h-screen">
      <div className="text-5xl">
        <h1 className="text-3xl mb-4">Messages</h1>
        {/* Example messages */}
        <p className="mb-2">Messages</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl pt-12 "
        aria-label="Chat input"
      >
        <div className="join w-full">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered join-item w-full"
            placeholder="Type your message..."
          />
          <button className="btn btn-primary join-item">Ask question</button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
