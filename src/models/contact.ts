export interface ContactModel {
  id: string;
  name: string;
}

export class Contact {
  public id: string;
  public name: string;

  constructor(contact: ContactModel) {
    this.id = contact.id;
    this.name = contact.name;
  }
}
