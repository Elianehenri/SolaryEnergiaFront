import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { CadastroUnidComponent } from './components/cadastro-unid/cadastro-unid.component';
import { EditarUnidComponent } from './components/editar-unid/editar-unid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SidebarComponent,
    GraficoComponent,
    CadastroUnidComponent,
    EditarUnidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
