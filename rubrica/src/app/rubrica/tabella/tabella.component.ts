import { Component, OnInit } from '@angular/core';
import { RubricaPage } from '../rubrica.page';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss'],
})
export class TabellaComponent implements OnInit {
  @Input() contatti: any;

  constructor() {}

  ngOnInit(): void {}
}
