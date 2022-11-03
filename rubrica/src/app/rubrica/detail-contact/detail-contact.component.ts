import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss'],
})
export class DetailContactComponent implements OnInit {
  @Input() contact: Contact = new Contact();

  constructor() {}

  ngOnInit(): void {}
}
