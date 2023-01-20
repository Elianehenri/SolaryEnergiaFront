import { Injectable } from '@angular/core';
import { IGeracao } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  
  
  valoresKw:number[] = [0,0,0,0,0,0,0,0,0,0,0,0]

  constructor() { }

  gerarGrafico(geracao:IGeracao[]){
    geracao.forEach((item:IGeracao) => {
      if(item.data == '2023-01'){
        this.valoresKw[0] += item.kw;
      }else if(item.data == '2023-02'){
        this.valoresKw[1] += item.kw;
      }else if(item.data == '2023-03'){
        this.valoresKw[2] += item.kw;
      }else if(item.data == '2023-04'){
        this.valoresKw[3] += item.kw;
      }else if(item.data == '2023-05'){
        this.valoresKw[4] += item.kw;
      }else if(item.data == '2023-06'){
        this.valoresKw[5] += item.kw;
      }else if(item.data == '2023-07'){
        this.valoresKw[6] += item.kw;
      }else if(item.data == '2023-08'){
        this.valoresKw[7] += item.kw;
      }else if(item.data == '2023-09'){
        this.valoresKw[8] += item.kw;
      }else if(item.data == '2023-10'){
        this.valoresKw[9] += item.kw;
      }else if(item.data == '2023-11'){
        this.valoresKw[10] += item.kw;
      }else if(item.data == '2023-12'){
        this.valoresKw[11] += item.kw;
      }
    })
    
    
  }
}
