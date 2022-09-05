import { DashboardRoutingModule } from './../../dashboard/dashboard-routing.module';
import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, MenuModule, DashboardRoutingModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
