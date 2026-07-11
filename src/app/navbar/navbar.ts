// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   imports: [],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css',
// })
// export class Navbar {}


import { Component, input } from '@angular/core'; // Adicione o 'input' aqui

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Declaramos que este componente aceita uma propriedade chamada 'usuarioLogado'
  usuarioLogado = input<string>('Visitante'); 
}