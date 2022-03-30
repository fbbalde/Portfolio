import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CertificacionComponent } from './componentes/certificacion/certificacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { BotonEliminarComponent } from './componentes/boton-eliminar/boton-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,

    EncabezadoComponent,
    HomeComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    CertificacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    BotonComponent,
    BotonEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
