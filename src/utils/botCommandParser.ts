import { Contact, Message } from "../models";
import {
  getArt,
  getCat,
  getChuckJoke,
  getDadJoke,
  getDog,
  getHeadline,
  getQuote,
  getSource,
} from "./http";

export const PenBotParser = async (sender: Contact, command: string) => {
  let [, suffix] = command.split(">");
  suffix = suffix.trim();
  const message = new Message({ sender, content: "" });

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
      message.content = "Invalid command";
      return message;
  }
};

export const NewsBotParser = async (sender: Contact, command: string) => {
  let [, suffix] = command.split("@");
  suffix = suffix.trim();

  const message = new Message({ sender, content: "" });

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
      message.content = "Invalid command";
      return message;
  }
};

export const NiceBotParser = async (sender: Contact, command: string) => {
  let [, suffix] = command.split("$");
  suffix = suffix.trim();

  const message = new Message({ sender, content: "" });

  switch (suffix) {
    case "howareyou":
      message.content = "I'm doing good! Thanks for asking";
      return message;
    case "youloveme":
      message.content =
        "Very much! Thanks for making such a good code. You'll have a nice grade for sure!";
      return message;
    default:
      message.content = "Invalid command";
      return message;
  }
};

export const ImageBotParser = async (sender: Contact, command: string) => {
  let [, suffix] = command.split("#");
  suffix = suffix.trim();

  const message = new Message({
    sender,
    content: "",
    type: "image",
  });

  switch (suffix) {
    case "dog":
      message.content = await getDog();
      return message;
    case "cat":
      message.content = await getCat();
      return message;
    case "art":
      message.content = await getArt();
      return message;
    default:
      message.content = "Invalid command";
      message.type = "text";
      return message;
  }
};

export const HelpBotParser = async (sender: Contact, command: string) => {
  const content = `All bots:
  whoami: All bots tells there names
Pen Bot:
  >quote: Gives you an inspiratiional quote
  >joke: Gives you a (dad) joke
  >chuck: Gives you a chuck norris joke
News Bot:
  @source: Give a news source you can trust
  @headline: Gives you and headline from french news
Image Bot:
  #cat: Gives a cat image
  #dog: Gives a dog image
  #art: Gives an artwork
Nice Bot:
  $howareyou: Tells you how the bot feels
  $youloveme: Tells you how much the bot loves you
`;

  const message = new Message({ sender, content });

  switch (command) {
    case "help":
    case "man":
      return message;
  }
};
