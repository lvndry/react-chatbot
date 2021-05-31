import {
  HelpBotParser,
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
    if (command === "whoareyou" && this.id !== "5") {
      return new Message({
        sender: this,
        content: `Hi my name is ${this.name}`,
      });
    } else {
      const prefix = command[0];
      if (prefix === this.prefix) {
        switch (prefix) {
          case "$":
            return NiceBotParser(this, command);
          case ">":
            return PenBotParser(this, command);
          case "@":
            return NewsBotParser(this, command);
          case "#":
            return ImageBotParser(this, command);
          default:
            return null;
        }
      } else if ((command == "help" || command === "man") && this.id === "5") {
        return HelpBotParser(this, command);
      }
    }
  }
}
