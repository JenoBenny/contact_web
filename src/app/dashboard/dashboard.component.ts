// In your dashboard.component.ts file
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public contacts: any[] = [];
 // Use the correct property name

 constructor(private router: Router, private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getAllContacts();
   
  }

showContactDetails(contact: any) {
  // Navigate to the contact details page and pass the contact's ID as a parameter
  this.router.navigate(['/contact', contact.name]);
}
}

