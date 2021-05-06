export interface ContactModel {
  name: string;
}

export class Contact {
  public name: string;

  constructor(contact: ContactModel) {
    this.name = contact.name;
  }
}
