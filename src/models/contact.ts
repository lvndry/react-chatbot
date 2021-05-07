export interface ContactModel {
  id: string;
  name: string;
  avatar: string;
}

export class Contact {
  public id: string;
  public name: string;
  public avatar: string;

  constructor(contact: ContactModel) {
    this.id = contact.id;
    this.name = contact.name;
    this.avatar = contact.avatar;
  }
}
