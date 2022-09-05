export interface Carro {
  id: number;
  vin: string;
  odometer: number;
  tirePressure: number[];
  status: string;
  batteryStatus: string;
  fuelLevel: number;
  lat: number;
  long: number;
}

export type Carros = Array<Carro>;

export interface Modelo {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
}

export type Modelos = Array<Modelo>;
