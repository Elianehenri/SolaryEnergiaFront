import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MOCK_UNIDADES } from 'src/app/mock/mock_unidades';
import { IGeracao, IUnidades } from 'src/app/models/interfaces';
import { AlertasService } from 'src/app/services/alertas.service';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-cadastro-kw',
  templateUrl: './cadastro-kw.component.html',
  styleUrls: ['./cadastro-kw.component.scss']
})
export class CadastroKwComponent implements OnInit{

  //unidade selecionada ou nao
  unidadeFoiSelecionada:boolean = true;


  listaUnidadesAtivas:IUnidades[] = [] //MOCK_UNIDADES
  listaGeracao:IGeracao[] = []



  novaGeracao:IGeracao = {
    id_unid:0,
    data:"",
    kw: 0,
    id:0,
  }

  constructor(
    private unidadeService:UnidadesService,
    private alertasService:AlertasService,
    private serviceTitle:Title
  ) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Solar Energy - Lançamento');
    this.buscarUnidadesAtivas();
    this.buscarGeracao();
  }

  buscarUnidadesAtivas(){
    this.unidadeService.devolverUnidade()
    .subscribe((result:IUnidades[]) =>{
     this.listaUnidadesAtivas = result.filter((item) => item.isActive == true);
    })
  }
  buscarGeracao(){
    this.unidadeService.devolverGeracao()
    .subscribe((result:IGeracao[]) =>{
      this.listaGeracao = result;
    })
  }

  cadastrarLancamento(){
    this.buscarGeracao();
    this.novaGeracao.id = Math.floor(Math.random()*100)
    let dataJaCadastrada:boolean = this.listaGeracao.some((item) => item.data == this.novaGeracao.data && item.id_unid == this.novaGeracao.id_unid);
    if(dataJaCadastrada){
      this.alertasService.alertaDataCadastrada();
    } else{
      if(this.novaGeracao.id_unid == 0){
        this.unidadeFoiSelecionada = false;
      } else {
        this.unidadeFoiSelecionada = true;
        this.unidadeService.cadastrarGeracao(this.novaGeracao);
      }
      this.buscarGeracao();
    }
  }
}
