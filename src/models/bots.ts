import { Contact, ContactModel } from "./contact";
import { Message } from "./message";

export interface BotModel extends ContactModel {
  prefix: string;
}

export class Bot extends Contact {
  public prefix: string;

  constructor(bot: BotModel) {
    super(bot);

    this.prefix = bot.prefix;
  }

  parseCommand(command: string) {
    if (command === "whoami") {
      return new Message({
        sender: this.name,
        content: `Hi my name is ${this.name}`,
      });
    } else {
      const pre = command[0];

      switch (pre) {
        case "$":
          // do meme stuff
          break;
        case ">":
          // do pen stuff
          break;
        case "@":
          // do popcorn stuff
          break;
        default:
          break;
      }
    }
  }
}
