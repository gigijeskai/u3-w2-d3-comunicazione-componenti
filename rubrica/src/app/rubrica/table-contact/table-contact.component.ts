import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-table-contact',
  templateUrl: './table-contact.component.html',
  styleUrls: ['./table-contact.component.scss'],
})
export class TableContactComponent implements OnInit {
  @Input() contactList?: Contact[];
  @Output() deleteContact = new EventEmitter();
  @Output() detailContact = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeContact(contact: Contact): void {
    this.deleteContact.emit(contact);
  }
  infoContact(contact: Contact) {
    this.detailContact.emit(contact);
  }
}
