import { Component, inject } from '@angular/core';
import { DeliveryService } from '../../service/delivery.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  fb = inject(FormBuilder);
  deliverySrv = inject(DeliveryService);

  result: any = null;
  error = '';

  form = this.fb.group({
    chiaveConsegna: [''],
    dataRitiro: ['']
  });

  search() {

    const value = this.form.value;

    this.deliverySrv.tracking(
      value.chiaveConsegna || '',
      value.dataRitiro || ''
    )
    .subscribe({
      next: (res) => {
        this.result = res;
        this.error = '';
      },
      error: () => {
        this.error = 'Consegna non trovata';
        this.result = null;
      }
    });
  }
}