import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  //exibe ou oculta a password
  visualizar:boolean = false;

  email:string = "";
  senha:string = "";

  constructor(
    private router:Router,
    private serviceTitle:Title) { }

    ngOnInit(): void {
      this.serviceTitle.setTitle('Solar Energy - Login');
    }

    // navegaçao para o dashboard
    entrar(){
      this.router.navigate(['dashboard']);

    }
    //senha visivel ou nao
    visualizarSenha(){
      let senha = document.getElementById('password')
      if(this.visualizar){
        senha?.setAttribute('type', 'password');
      }else{
        senha?.setAttribute('type', 'text');
      }
      this.visualizar = !this.visualizar;
    }

}
