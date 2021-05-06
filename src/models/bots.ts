import { Contact, ContactModel } from "./contact";

export interface BotModel extends ContactModel {
  command: string;
}

export class Bot extends Contact {
  public command: string;

  constructor(bot: BotModel) {
    super(bot);

    this.command = bot.command;
  }
}
