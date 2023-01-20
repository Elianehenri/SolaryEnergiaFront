import { Component } from '@angular/core';
import { IUnidades } from 'src/app/models/interfaces';
import { AlertasService } from 'src/app/services/alertas.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-unid',
  templateUrl: './cadastro-unid.component.html',
  styleUrls: ['./cadastro-unid.component.scss']
})
export class CadastroUnidComponent {



  constructor(
  public unidadeService:UnidadesService,
  public alertasService:AlertasService,
  private serviceTitle:Title){}


  ngOnInit(): void {
    this.serviceTitle.setTitle('Solar Energy - Cadastrar');
  }
  //funcao cadastrar unidade
  adicionarUnidade(){
    this.unidadeService.cadastrarUnidade();
    this.alertasService.alertaUnidadeAdicionada();
    this.buscarUnidades()
  }

  //metodo atualizar a lista de unidades
  buscarUnidades(){
    this.unidadeService.devolverUnidade()
    .subscribe((result:IUnidades[]) =>
    result)
  }


}
