import { Message, MessageModel } from "../message";

const models: MessageModel[] = [
  {
    sender: "bot1",
    content: "Message 1",
    date: "05-06-2021",
  },
  {
    sender: "bot2",
    content: "Message 2",
    date: "05-06-2021",
  },
  {
    sender: "bot3",
    content: "Message 3",
    date: "05-06-2021",
  },
];

export default models.map((message) => new Message(message));
