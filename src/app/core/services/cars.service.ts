import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCarros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/carros`);
  }

  cadastrarCarro(carro: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/carros`, carro);
  }

  atualizarCarro(carro: Carro): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/carros/${carro.id}`, carro);
  }

  apagarCarro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/carros/${id}`);
  }
}
