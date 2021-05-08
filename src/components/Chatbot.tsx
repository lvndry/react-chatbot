import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routes from "./routes";

import { Bot, Contact, Message } from "../models";
import { NewMessageContext } from "../context/newMessageContext";
import { delay } from "../utils/async";
import { addMessage, setContacts } from "../store/actions";
import { IRootState } from "../store/reducers";

export const Chatbot = () => {
  const dispatch = useDispatch();
  const context = useContext(NewMessageContext);

  context.handleNewMessage = (message: Message) => {
    dispatch(addMessage(message));

    const command = message.content;
    if (command === "help") {
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
  $youloveme: Tells you how much the bot love you
`;

      const sender = new Contact({
        id: "5",
        name: "Help",
        avatar:
          "https://media4.giphy.com/media/TLO184piUJRmwqxKVN/giphy.gif?cid=6c09b952ih3t0yxrf9qej4aqezosw6dl5f093kk65nfakljk&rid=giphy.gif",
      });

      const helpMessage = new Message({ sender, content });
      delay(500).then(() => {
        dispatch(addMessage(helpMessage));
      });
    } else {
      bots.map(async (contact) => {
        if (contact instanceof Bot) {
          const message = await contact.parseCommand(command);
          if (message) {
            delay(400).then(() => {
              dispatch(addMessage(message));
            });
          }
        }
      });
    }
  };

  const bots = [
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

  const currentContact = useSelector(
    (state: IRootState) => state.contact.currentContact
  );

  useEffect(() => {
    const contacts = [currentContact, ...bots];
    dispatch(setContacts(contacts));
  }, [currentContact]);

  return <Routes />;
};
