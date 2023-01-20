import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IUnidades } from 'src/app/models/interfaces';
import { AlertasService } from 'src/app/services/alertas.service';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent {

  listaUnidades:IUnidades[] = []

  constructor(
    private router:Router,
    private unidadeService:UnidadesService,
    private serviceTitle: Title,
    private alertasService:AlertasService
  ) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Solar Energy - Unidades');
    this.buscarUnidades()
  }

  //buscar unidade
  buscarUnidades(){
    this.unidadeService.devolverUnidade()
    .subscribe((result:IUnidades[]) =>{
      this.listaUnidades = result;
    })
  }

  //funcao de editar a unidade e navegacao para pagina
  editarUnid(id:number){
    this.unidadeService.editarUnidade(id)
    this.router.navigate(['unidades/editar-unidades']);
  }

  //remover unidade
  removerUnid(id:number){
    this.unidadeService.removerUnidade(id);
    this.alertasService.alertaUnidadeRemovida()
    this.buscarUnidades();
  }
  // direciona para apagina de unidades
  cadastroUnidades(){
    this.router.navigate(['unidades/cadastro-unidades']);
  }

}
