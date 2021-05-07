import {
  ImageBotParser,
  NewsBotParser,
  NiceBotParser,
  PenBotParser,
} from "../utils/botCommandParser";
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

  async parseCommand(command: string) {
    if (command === "whoami") {
      return new Message({
        sender: this.name,
        content: `Hi my name is ${this.name}`,
      });
    } else {
      const prefix = command[0];
      if (prefix === this.prefix) {
        switch (prefix) {
          case "$":
            // do nice bot stuff
            return NiceBotParser(this.name, command);
          case ">":
            // do pen bot stuff
            return PenBotParser(this.name, command);
          case "@":
            // do popcorn stuff
            return NewsBotParser(this.name, command);
          case "#":
            return ImageBotParser(this.name, command);
          default:
            return null;
        }
      }
    }
  }
}
