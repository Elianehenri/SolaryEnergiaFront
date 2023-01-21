import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartType, Title } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IGeracao } from 'src/app/models/interfaces';
import { GraficoService } from 'src/app/services/grafico.service';
import { UnidadesService } from 'src/app/services/unidades.service';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit{

  mostrarGrafico:boolean = false;

  listaGeracao:IGeracao[] = [];

  constructor(
    private unidadeService:UnidadesService,
    private graficoService:GraficoService,
    ) { }


  ngOnInit(): void {
    this.buscarGeracao()
  }

  lineChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: [],
        label: 'Total Kw/Mês',
        backgroundColor: '#0000ff',
        borderColor: '#0000ff',
        pointBackgroundColor: '#ff0000',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0000ff',
        fill: false,
      }
    ]
  };
  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    plugins: {
      legend: {
        display: true
      },

    }
  };

  lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  //metodo que busca as gerações do json-server, busca informações do service e coloca nas configurações do grafico
  buscarGeracao(){
    this.unidadeService.devolverGeracao()
    .subscribe((result:IGeracao[]) =>{
      this.listaGeracao = result;
      this.buscarGrafico(this.listaGeracao)
    })
  }
  buscarGrafico(geracao:IGeracao[]){
    this.graficoService.valoresKw = [0,0,0,0,0,0,0,0,0,0,0,0];
    this.graficoService.gerarGrafico(geracao);
    this.lineChartData.datasets[0].data = this.graficoService.valoresKw
    this.mostrarGrafico = true;
  }

}
