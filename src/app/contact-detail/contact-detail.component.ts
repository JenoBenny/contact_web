import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: any;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const contactName = params['name'];
      this.contact = this.contactsService.getContactByName(contactName);
    });
  }
}

