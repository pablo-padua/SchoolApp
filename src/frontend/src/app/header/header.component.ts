import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Cadastro/Consulta de Alunos e Turmas';

  constructor() { }

  ngOnInit(): void {
  }

}
