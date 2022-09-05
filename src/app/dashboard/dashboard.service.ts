import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carros, Modelos } from './dashboard';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient, private TokenService: TokenService) {}

  listaDosCarros(): Observable<{vehicleData: Carros}> {
    const token = this.TokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<{vehicleData: Carros}>(`${API}/vehicleData`, {
      headers,
    });
  }

  listaDosModelos(): Observable<{vehicles: Modelos}> {
    const token = this.TokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<{vehicles: Modelos}>(`${API}/vehicle`, {
      headers,
    });
  }
}
