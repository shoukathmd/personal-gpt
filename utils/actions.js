"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    console.log(chatMessages);
    // Validate chatMessages format
    // if (!Array.isArray(chatMessages)) {
    //   throw new Error("chatMessages should be an array");
    // }

    chatMessages.forEach((message, index) => {
      if (
        typeof message !== "object" ||
        !message.hasOwnProperty("role") ||
        !message.hasOwnProperty("content")
      ) {
        throw new Error(`Invalid message format at index ${index}`);
      }
    });

    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 100,
    });

    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};
