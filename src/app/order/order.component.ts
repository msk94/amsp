import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router: Router) {}

  goToAddPage() {
    this.router.navigate(['order', 'add']); // Navigate to the 'order' route without leading slash
  }
  
  goToChangePage() {
    this.router.navigate(['order', 'change']); // Navigate to the 'order/change' route without leading slash
  }

}
