import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { CadastroUnidComponent } from './components/cadastro-unid/cadastro-unid.component';
import { EditarUnidComponent } from './components/editar-unid/editar-unid.component';
import { FormsModule } from '@angular/forms';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { CadastroKwComponent } from './pages/cadastro-kw/cadastro-kw.component';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

const ROUTES:Route[] = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'unidades',
    children:[
      {
        path:'',
        component:UnidadesComponent
      },
      {
        path:'cadastro-unidades',
        component:CadastroUnidComponent
      },
      {
        path:'editar-unidades',
        component:EditarUnidComponent
      }
    ]
  },
  {
    path:'cadastro',
    component:CadastroKwComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SidebarComponent,
    GraficoComponent,
    CadastroUnidComponent,
    EditarUnidComponent,
    UnidadesComponent,
    CadastroKwComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
