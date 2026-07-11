import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HttpClient } from '@angular/common/http'; // Adicione o HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
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





  // 1. Injetamos o serviço HTTP do Angular de forma limpa
  private http = inject(HttpClient);

  // 2. Criamos uma lista vazia para armazenar as estações de recarga
  estacoesDeRecarga: any[] = [];

  // 3. O ngOnInit roda automaticamente assim que a tela carrega (como o useEffect do React)
  ngOnInit() {
    this.buscarEstacoes();
  }

  buscarEstacoes() {
    // Usamos uma API pública simulada para buscar pontos de recarga de veículos elétricos
    const urlApi = 'https://jsonplaceholder.typicode.com/users'; // Usando mock público estável para teste
    
    this.http.get<any[]>(urlApi).subscribe({
      next: (dados) => {
        // Mapeamos os dados para simular uma resposta de infraestrutura de recarga
        this.estacoesDeRecarga = dados.map((item, index) => ({
          id: item.id,
          nome: `Estação Eletro-Rota ${item.address.city}`,
          status: index % 2 === 0 ? 'Disponível' : 'Ocupada',
          potencia: index % 2 === 0 ? '50kW (Rápida)' : '22kW (Semirrápida)'
        }));
      },
      error: (erro) => {
        console.error('Erro ao buscar dados da rota elétrica:', erro);
      }
    });

  }

}
