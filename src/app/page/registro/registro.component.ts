import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  anoAtual: number = new Date().getFullYear();
  estadoMenu: boolean = false;

  constructor(){}
  trocaMenu(){
    const valor = !this.estadoMenu;
    this.estadoMenu = valor;
  }

  ngOnInit() {
  }

}
