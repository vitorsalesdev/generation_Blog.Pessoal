import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  nome: string;
  descricao: string;
  constructor() { }

  ngOnInit() {
    this.nome = 'Vitor Sales'
    this.descricao = 'Estudante de Desenvolvimento Web Java na Generation Brasil'
  }

}
