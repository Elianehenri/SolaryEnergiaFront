import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }
//unidade removida
alertaUnidadeRemovida(){
  Swal.fire({
    position: 'top',
    text: '❌ Unidade Removida!',
    width: 350,
    color: '#D82D56',
    background: '#f7d2db',
    showConfirmButton: false,
    timer: 700
  })
}


  //unidade cadastrada
  alertaUnidadeAdicionada(){
    Swal.fire({
      position: 'top',
      text: '✔️ Unidade adicionada com Sucesso!',
      width: 400,
      color: '#8DB51B',
      background: '#edf7d3',
      showConfirmButton: false,
      timer: 800
    })
  }
  //unidade editada
  alertaEdicaoSalva(){
    Swal.fire({
      position: 'top',
      text: '✔️ Alteração salva com sucesso!',
      width: 400,
      color: '#8DB51B',
      background: '#edf7d3',
      showConfirmButton: false,
      timer: 800
    })
  }
//data ja cadastrada
alertaDataCadastrada(){
  Swal.fire({
    position: 'top',
    text: '❌ ERRO: Data já cadastrada no sistema',
    width: 350,
    color: '#D82D56',
    background: '#f7d2db',
    showConfirmButton: false,
    timer: 1000
  })
}

  // km incluido
  alertaKwIncluido(){
    Swal.fire({
      position: 'top',
      text: '✔️ Geração incluída com sucesso!',
      width: 400,
      color: '#8DB51B',
      background: '#edf7d3',
      showConfirmButton: false,
      timer: 800
    })
  }
}
