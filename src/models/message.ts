import { Contact } from "./contact";
import { getMessageDate } from "../utils/date";

export type MessageType = "text" | "image";

export interface MessageModel {
  sender: Contact;
  content: string;
  date?: string;
  type?: MessageType;
}

export class Message {
  public sender: Contact;
  public date: string;
  public content: string;
  public type: MessageType;
  public id: number;

  public static counter = 0;

  constructor(message: MessageModel) {
    this.sender = message.sender;
    this.date = message.date || getMessageDate();
    this.content = message.content;
    this.type = message.type || "text";

    this.id = Message.counter;
    Message.counter += 1;
  }
}
