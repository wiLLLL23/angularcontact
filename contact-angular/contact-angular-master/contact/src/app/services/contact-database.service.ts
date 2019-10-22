import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class ContactDatabaseService {

  myContacts: Contact[] = [];
  sendContact = new EventEmitter();

  constructor() { }

  setContact(newContact: Contact) {
    this.myContacts.push(newContact);
    this.sendContact.emit(this.myContacts);
  }

  getContactById(id: number) {
    let contact: Contact;
    contact = this.myContacts[id];
    return contact;
  }


}
