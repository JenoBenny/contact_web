
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private localStorageKey = 'contacts';

  constructor() { }

  private getContactsFromLocalStorage(): any[] {
    const storedContacts = localStorage.getItem(this.localStorageKey);
    return storedContacts ? JSON.parse(storedContacts) : [];
  }

  private setContactsToLocalStorage(contacts: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }

  public getAllContacts(): any[] {
    return this.getContactsFromLocalStorage();
  }

  public addContact(contact: any): void {
    const contacts = this.getContactsFromLocalStorage();
    contacts.push(contact);
    this.setContactsToLocalStorage(contacts);
  }
  public getContactByName(name: string): any {
    const contacts = this.getContactsFromLocalStorage();
    return contacts.find(contact => contact.first_name + ' ' + contact.last_name === name);
  }  
}
