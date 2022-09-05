import { CartaoModule } from './../componentes/cartao/cartao.module';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ConteudoDashboardComponent } from './conteudo-dashboard/conteudo-dashboard.component';


@NgModule({
  declarations: [
    ConteudoDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    CartaoModule
  ]
})
export class DashboardModule { }
