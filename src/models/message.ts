import { getMessageDate } from "../utils/date";

export type MessageType = "text" | "image";

export interface MessageModel {
  sender: string;
  content: string;
  date?: string;
  type?: MessageType;
}

export class Message {
  public sender: string;
  public date: string;
  public content: string;
  public type: MessageType;

  constructor(message: MessageModel) {
    this.sender = message.sender;
    this.date = message.date || getMessageDate();
    this.content = message.content;
    this.type = message.type || "text";
  }
}
