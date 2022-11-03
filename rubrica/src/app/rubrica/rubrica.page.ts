import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './rubrica.page.html',
  styleUrls: ['./rubrica.page.scss'],
})
export class RubricaPage implements OnInit {
  listaContatti = [
    { nome: 'mario', cognome: 'rossi', telefono: 1234567890 },
    { nome: 'maria', cognome: 'rosi', telefono: 1234567899 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
