import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Delivery } from './delivery.entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  protected http = inject(HttpClient);

  
  list(filters?: { clienteId?: string; stato?: string }) {

    let query = '';

    if (filters) {
      const params = new URLSearchParams();

      if (filters.clienteId) {
        params.append('clienteId', filters.clienteId);
      }

      if (filters.stato) {
        params.append('stato', filters.stato);
      }

      query = `?${params.toString()}`;
    }

    return this.http.get<Delivery[]>(
      `${environment.apiUrl}/consegna${query}`
    );
  }

  
  getById(id: string) {
    return this.http.get<Delivery>(
      `${environment.apiUrl}/consegna/${id}`
    );
  }

  
  add(delivery: Partial<Delivery>) {
    return this.http.post<Delivery>(
      `${environment.apiUrl}/consegna`,
      delivery
    );
  }

  
  update(id: string, body: any) {
    return this.http.put(
      `${environment.apiUrl}/consegna/${id}`,
      body
    );
  }

  updateStatus(id: string, stato: string) {
    return this.http.put(
      `${environment.apiUrl}/consegna/${id}/stato`,
      { stato }
    );
  }

  delete(id: string) {
    return this.http.delete(
      `${environment.apiUrl}/consegna/${id}`
    );
  }

  tracking(
    chiaveConsegna: string,
    dataRitiro: string
  ) {
    return this.http.post<any>(
      `${environment.apiUrl}/tracking`,
      {
        chiaveConsegna,
        dataRitiro
      }
    );
  }
}