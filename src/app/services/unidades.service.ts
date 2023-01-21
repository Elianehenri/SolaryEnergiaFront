import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MOCK_UNIDADES } from '../mock/mock_unidades';
import { IGeracao, IUnidades } from '../models/interfaces';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  //guardar a lista de unidades
  listaUnidades: IUnidades[] = MOCK_UNIDADES

  // guardar enderço url
  enderecoURL: string = 'http://localhost:3000';

  //objeto informaçoes da unidade a ser criada
  novaUnidade: IUnidades = {
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    isActive: false,
    id: 0,
  }


  constructor(
    private http: HttpClient,
    private router:Router,
    private alertasService: AlertasService
  ) { }

  //metodo devolve as unidades do json
  devolverUnidade(): Observable<IUnidades[]> {
    return this.http.get<IUnidades[]>(`${this.enderecoURL}/unidades`)
  }

  //metodo devolve as geraçoes do json
  devolverGeracao(): Observable<IGeracao[]> {
    return this.http.get<IGeracao[]>(`${this.enderecoURL}/geracao`)
  }

  //cadastra nova unidade no json
  cadastrarUnidade() {
    this.novaUnidade.id = Math.floor(Math.random() * 1000)
    this.http.post<IUnidades>(`${this.enderecoURL}/unidades`, this.novaUnidade)
      .subscribe(result => { result });
    this.router.navigate(['/unidades'])
  }

  //metodo editar unidade
  editarUnidade(id: number) {
    this.devolverUnidade()
      .subscribe((result: IUnidades[]) => {
        this.listaUnidades = result;
        let unidade = this.listaUnidades.filter((item) => item.id == id)
        this.novaUnidade = unidade[0]
      })

  }
  //metodo salvar unidade editada
  salvarEdicao(id:number){
    this.http.put<IUnidades>(`${this.enderecoURL}/unidades/${id}`, this.novaUnidade)
    .subscribe();
    this.router.navigate(['/unidades'])
  }

  //remove uma unidade
  removerUnidade(id:number){
    this.http.delete<IUnidades>(`${this.enderecoURL}/unidades/${id}`)
    .subscribe()
  }

  // cadastrar nova geracao
  cadastrarGeracao(novaGeracao: IGeracao){
    this.http.post<IGeracao>(`${this.enderecoURL}/geracao`, novaGeracao)
      .subscribe(result => {this.alertasService.alertaKwIncluido()});
  }
}
