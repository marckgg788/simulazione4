import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Client } from './client.entity';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  protected http = inject(HttpClient);

  list() {
    return this.http.get<Client[]>(
      `${environment.apiUrl}/client`
    );
  }

  getById(id: string) {
    return this.http.get<Client>(
      `${environment.apiUrl}/client/${id}`
    );
  }


  add(client: Partial<Client>) {
    return this.http.post<Client>(
      `${environment.apiUrl}/client`,
      client
    );
  }

  update(id: string, body: any) {
    return this.http.put(
      `${environment.apiUrl}/client/${id}`,
      body
    );
  }

  delete(id: string) {
    return this.http.delete(
      `${environment.apiUrl}/client/${id}`
    );
  }
}