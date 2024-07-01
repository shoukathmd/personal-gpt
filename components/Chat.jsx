"use client";

import React, { useState } from "react";
import { generateChatResponse } from "../utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await generateChatResponse(messages);

      if (!response) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    setMessages((prev) => [...prev, query]);
    setText("");
    mutate();
  };
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div className="text-5xl">
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? "👤" : "🤖";
          const bcg = role === "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={`${bcg} flex py-6 px-8 text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl pt-12 "
        aria-label="Chat input"
      >
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Please Wait..." : "Ask Question"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
