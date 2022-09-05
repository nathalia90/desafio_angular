import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CabecalhoModule
  ]
})
export class InicioModule { }
