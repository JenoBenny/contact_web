import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  
  public newContact = {
    first_name: '',
    last_name:'',
    email: '',
    phone: '',
    mobile:'',
    dob:'',
    image: ''
  };
  public imagePreview: any = null;
  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.previewImage(file);
      // Create a blob object from the file
      const blob = new Blob([file], { type: file.type });
      // Save the blob object in your service
    }
  }
  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.newContact.image = e.target.result;
      this.imagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  addContact() {
    this.contactsService.addContact(this.newContact);
    this.newContact = { // Corrected assignment
      first_name: '',
      last_name:'',
      email: '',
      phone: '',
      mobile:'',
      dob:'',
      image: ''
    };
    this.imagePreview = null;
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.previewImage(file);
    }
  }
}
