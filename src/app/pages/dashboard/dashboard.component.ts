import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUnidades, IGeracao } from 'src/app/models/interfaces';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //lista de unidade e geraçoes
  listaUnidades:IUnidades[] = [];
  listaGeracao:IGeracao[] = [];

  //variaveis que guardam o valor dos cards
  totalDeUnidades:number = 0;
  unidadesAtivas:number = 0;
  unidadesInativas:number = 0;
  mediaDeEnergia:number | string = 0

  constructor(
    private unidadeService:UnidadesService,
    private serviceTitle: Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Solar Energy - Dashboard');
    this.buscarUnidades();
  }

  //funcao buscar undiades
  buscarUnidades(){
    this.unidadeService.devolverUnidade()
    .subscribe((result:IUnidades[]) =>{
      this.listaUnidades = result;
      this.totalunidades();
      this.isActive();
      this.mediaEnergia();
    })
  }

  //metodo incluir qtde de und
  totalunidades(){
    this.totalDeUnidades = this.listaUnidades.length;
  }

    //verificar unid. ativa ou inativa
    isActive(){
      this.listaUnidades.forEach((item) => {
        if(item.isActive === true){
          this.unidadesAtivas += 1;
        } else{
          this.unidadesInativas += 1;
        }
      })
    }
  
    //media dos kw
    mediaEnergia(){
      this.unidadeService.devolverGeracao()
      .subscribe((result:IGeracao[]) =>{
        this.listaGeracao = result;
        if(this.listaGeracao.length){
          let totalEnergia = this.listaGeracao.reduce((soma, item) => (soma + item.kw), 0) / this.unidadesAtivas;
          this.mediaDeEnergia = totalEnergia.toFixed(0);
        }
      })
    }
}
