import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Routes from "./routes";

import { Bot, Contact, Message } from "../models";
import { ChatActionsType, contactActionsType } from "../store/actions";

export const Chatbot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = [
      new Contact({
        id: "0",
        name: "lvndry",
        avatar:
          "https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif",
      }),
      new Bot({
        id: "1",
        name: "Nice bot",
        prefix: "$",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WHY6E-I-d3n5ukOG7CpR6tpu8KUiBn0D_3rNBYPAvP6z07rgKJtGtm8zCQ52kB5Gfs4&usqp=CAU",
      }),
      new Bot({
        id: "2",
        name: "Pen bot",
        prefix: ">",
        avatar: "https://avatars.githubusercontent.com/u/33565557?v=4",
      }),
      new Bot({
        id: "3",
        name: "News bot",
        prefix: "@",
        avatar:
          "https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png",
      }),
      new Bot({
        id: "4",
        name: "Image bot",
        prefix: "#",
        avatar: "https://image.pngaaa.com/809/3704809-middle.png",
      }),
    ];

    dispatch({ type: contactActionsType.SET_CONTACTS, payload: contacts });
    dispatch({
      type: contactActionsType.SET_CURRENT_CONTACT,
      payload: contacts.find((contact) => contact.id === "0"),
    });

    document.addEventListener(
      "newMessage",
      ({ detail }: CustomEvent<{ message: Message }>) => {
        const command = detail.message.content;
        if (command === "help") {
          const content = `
Nice Bot:
  $howareyou: Tells you how the bot feels
  $youloveme: Tells you how much the bot love you
Pen Bot:
  >quote: Gives you an inspiratiional quote
  >joke: Gives you a (dad) joke
  >chuck: Gives you a chuck norris joke
News Bot:
  @source: Give a news source you can trust
  @headline: Gives you and headline from french news
`;

          const payload = new Message({ sender: "Help", content });
          dispatch({ type: ChatActionsType.ADD_MESSAGE, payload });
        } else {
          contacts.map(async (contact) => {
            if (contact instanceof Bot) {
              const message = await contact.parseCommand(command);
              if (message) {
                dispatch({
                  type: ChatActionsType.ADD_MESSAGE,
                  payload: message,
                });
              }
            }
          });
        }
      }
    );
  }, []);

  return <Routes />;
};
