export interface MessageModel {
  sender: string;
  date: string;
  content: string;
  type?: string;
}

export class Message {
  public sender: string;
  public date: string;
  public content: string;
  public type?: string;

  constructor(message: MessageModel) {
    this.sender = message.sender;
    this.date = message.date;
    this.content = message.content;
    this.type = message.type;
  }
}
