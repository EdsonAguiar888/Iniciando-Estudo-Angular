import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title =('Porto Conectado');
  desenvolvedor = 'HP';

  // 1. Criamos a nossa variável do contador começando em zero
  numeroContador = 0;

  // 2. Criamos a função para incrementar
  incrementar() {
    this.numeroContador++;
  }

  // 3. Criamos a função para decrementar
  decrementar() {
    if (this.numeroContador > 0) {
      this.numeroContador--;
    }
  }
  
  mudarNome() {
    this.desenvolvedor = this.desenvolvedor === 'HP' ? 'Desenvolvedor Sênior' : 'HP';
  }

  // Sua lista de rotas ou locais do projeto
  locaisDoPorto = [
    'Terminal de Passageiros',
    'Cais de Carga Geral',
    'Pátio de Containers',
    'Zona de Logística Avançada'
  ];

}
