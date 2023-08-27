import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']
})
export class ContactBookComponent implements OnInit {

  public contacts: any[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getAllContacts();
  }

}
