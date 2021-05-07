import { Message } from "../models";
import {
  getChuckJoke,
  getDadJoke,
  getHeadline,
  getQuote,
  getSource,
} from "./http";

export const PenBotParser = async (sender: string, command: string) => {
  let [, suffix] = command.split(">");
  suffix = suffix.trim();
  const message = new Message({ sender, content: "", type: "text" });

  switch (suffix) {
    case "quote":
      const quote = await getQuote();
      message.content = quote;
      return message;
    case "joke":
      const joke = await getDadJoke();
      message.content = joke;
      return message;
    case "chuck":
      const chuck = await getChuckJoke();
      message.content = chuck;
      return message;
    default:
      return null;
  }
};

export const NewsBotParser = async (sender: string, command: string) => {
  let [, suffix] = command.split("@");
  suffix = suffix.trim();

  const message = new Message({
    sender,
    content: "",
    type: "text",
  });

  switch (suffix) {
    case "headline":
      const headline = await getHeadline();
      message.content = headline;
      return message;
    case "source":
      const source = await getSource();
      message.content = source;
      return message;
    default:
      return null;
  }
};

export const NiceBotParser = async (sender: string, command: string) => {
  let [, suffix] = command.split("$");
  suffix = suffix.trim();

  const message = new Message({
    sender,
    content: "",
    type: "text",
  });

  switch (suffix) {
    case "howareyou":
      message.content = "I'm doing good! Thanks for asking";
      return message;
    case "youloveme":
      message.content =
        "Very much! Thanks for making such a good code. You'll have a nice grade for sure";
      return message;
    default:
      return null;
  }
};
