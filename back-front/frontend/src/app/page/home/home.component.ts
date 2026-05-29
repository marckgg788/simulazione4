import { Component, inject } from '@angular/core';
import { DeliveryService } from '../../service/delivery.service';
import { FormBuilder } from '@angular/forms';
import { Client } from '../../service/client.entity';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

   private clientService = inject(ClientService);

  clients: Client[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.loading = true;

    this.clientService.list().subscribe({
      next: (res) => {
        this.clients = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Errore caricamento clienti', err);
        this.loading = false;
      }
    });
  }
}