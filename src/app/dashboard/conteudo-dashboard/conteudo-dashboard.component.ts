import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Modelos, Modelo, Carro, Carros } from '../dashboard';

@Component({
  selector: 'app-conteudo-dashboard',
  templateUrl: './conteudo-dashboard.component.html',
  styleUrls: ['./conteudo-dashboard.component.css'],
})
export class ConteudoDashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  selectedModel?: Modelo;

  modelList: Modelos = [];

  selectedCode?: Carro;

  codeList: Carros = [];

  ngOnInit(): void {
    this.dashboardService.listaDosModelos().subscribe((value) => {
      this.modelList = value.vehicles;
      this.selectedModel = value.vehicles[0];
    });

    this.dashboardService.listaDosCarros().subscribe((value) => {
      console.log(value)
      this.codeList = value.vehicleData;
      this.selectedCode = value.vehicleData[0];
    });
  }

  onSelectChange(event: any) {
    const carroEscolhido = event.target.value;
    this.selectedModel = this.modelList.find(
      (value) => value.vehicle === carroEscolhido
    );
  }

  onTypeChange(event: any) {
    const codigoEscolhido = event.target.value;
    this.selectedCode = this.codeList.find(
      (value) => value.vin === codigoEscolhido
    );
  }
}
