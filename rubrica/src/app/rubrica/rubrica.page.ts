import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';

@Component({
  templateUrl: './rubrica.page.html',
  styleUrls: ['./rubrica.page.scss'],
})
export class RubricaPage implements OnInit {
  infoContact?: Contact;

  listaContatti: Contact[] = [
    {
      name: 'Mario',
      lastname: 'Rossi',
      city: 'Roma',
      email: 'm.rossi@example.com',
      phone: '12345',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onRemoveContact(contact: Contact) {
    this.listaContatti = this.listaContatti.filter(
      (c) => c.email !== contact.email
    );
    // let index = this.listaContatti.findIndex(
    //   (c) => contact.email === contact.email
    // );
    // this.listaContatti.splice(index, 1);
  }
  onCreateContact(contact: Contact) {
    this.listaContatti.push(contact);
  }

  onInfoContact(contact: Contact) {
    this.infoContact = contact;
  }
}
