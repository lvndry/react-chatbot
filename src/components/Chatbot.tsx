import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routes from "./routes";

import { Bot, Message } from "../models";
import { NewMessageContext } from "../context/newMessageContext";
import { addMessage, setContacts } from "../store/actions";
import { IRootState } from "../store/reducers";

import { delay } from "../utils/async";
import { colors } from "../utils/colors";

export const Chatbot = () => {
  const dispatch = useDispatch();
  const context = useContext(NewMessageContext);

  context.handleNewMessage = (message: Message) => {
    dispatch(addMessage(message));

    const command = message.content;

    bots.map((bot) => {
      bot.parseCommand(command).then((message) => {
        if (message) {
          delay(450).then(() => {
            dispatch(addMessage(message));
          });
        }
      });
    });
  };

  const bots = [
    new Bot({
      id: "1",
      name: "Nice bot",
      prefix: "$",
      color: colors[1],
      avatar:
        "https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png",
    }),
    new Bot({
      id: "2",
      name: "Pen bot",
      prefix: ">",
      color: colors[2],
      avatar: "https://avatars.githubusercontent.com/u/33565557?v=4",
    }),
    new Bot({
      id: "3",
      name: "News bot",
      prefix: "@",
      color: colors[3],
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WHY6E-I-d3n5ukOG7CpR6tpu8KUiBn0D_3rNBYPAvP6z07rgKJtGtm8zCQ52kB5Gfs4&usqp=CAU",
    }),
    new Bot({
      id: "4",
      name: "Image bot",
      prefix: "#",
      color: colors[4],
      avatar: "https://cdn.iconscout.com/icon/free/png-256/robot-97-415007.png",
    }),
    new Bot({
      id: "5",
      name: "Help",
      prefix: "help",
      color: colors[5],
      avatar:
        "https://media4.giphy.com/media/TLO184piUJRmwqxKVN/giphy.gif?cid=6c09b952ih3t0yxrf9qej4aqezosw6dl5f093kk65nfakljk&rid=giphy.gif",
    }),
  ];

  const currentContact = useSelector(
    (state: IRootState) => state.contact.currentContact
  );

  useEffect(() => {
    const contacts = [currentContact, ...bots].filter((bot) => bot.id !== "5");
    dispatch(setContacts(contacts));
  }, [currentContact]);

  return <Routes />;
};
