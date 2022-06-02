import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-aula2',
  templateUrl: './teste-aula2.component.html',
  styleUrls: ['./teste-aula2.component.css']
})
export class TesteAula2Component implements OnInit {
  shows = [
    {cidade: 'Juiz de Fora/MG', data: '16/06/2022', local: 'Cultural Bar', valor: 80.0},
    {cidade: 'Belo Horizonte/MG', data: '17/06/2022', local: 'Autentica', valor: 150.0},
    {cidade: 'Vila Velha/ES', data: '18/06/2022', local: 'Correria Music Bar', valor: 140.0},
    {cidade: 'Brasilia/DF', data: '10/07/2022', local: 'Toinha Brasil Show', valor: 120.0}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
