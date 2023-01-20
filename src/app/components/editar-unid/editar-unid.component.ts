import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertasService } from 'src/app/services/alertas.service';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-editar-unid',
  templateUrl: './editar-unid.component.html',
  styleUrls: ['./editar-unid.component.scss']
})
export class EditarUnidComponent  implements OnInit{

  constructor(
    public unidadeService:UnidadesService,
    public alertasService:AlertasService,
    private serviceTitle:Title
  ) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle('Solar Energy - Editar');
  }

  //metodo que chama a funcao de salvar a ediçao e direciona pra lista de unidades
  salvarAlteracao(id:number){
    this.unidadeService.salvarEdicao(id);
    this.alertasService.alertaEdicaoSalva();
  }

}
