// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   imports: [],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css',
// })
// export class Navbar {}


import { Component, input, output } from '@angular/core'; // Adicionamos o 'output'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  usuarioLogado = input<string>('Visitante'); 

  // 1. Criamos um evento customizado chamado 'onTrocarUsuario'
  onTrocarUsuario = output<void>();

  // 2. Função que será disparada ao clicar no botão interno da Navbar
  dispararTroca() {
    this.onTrocarUsuario.emit(); // Isso envia o sinal para o componente Pai!
  }
}