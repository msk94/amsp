import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-change',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './change.component.html',
  styleUrl: './change.component.css'
})
export class ChangeComponent {

  Users: any [] = [
    {id: 1,action:'../../assets/delete icon.png',areaCode:'+4173(2)234', phoneNo: '5200', subscriber: 'Nacca Gustavo', connection: 'BCS IP (ACM)',department:'AA/SAR1',costCenter:'909360',pbx:'XMOBILE',site:'Bua'},
    {id: 2,action:'../../assets/delete icon.png',areaCode:'+4173(2)876', phoneNo: '5201', subscriber: 'John Newman', connection: 'BCS IP (ACM)',department:'AA/SAR-CMS',costCenter:'9093879',pbx:'XMOBILE',site:'Bua'},
    {id: 3,action:'../../assets/delete icon.png',areaCode:'+4173(2)672', phoneNo: '7004', subscriber: 'Paul Scholes', connection: 'BCS VDN (ACM)',department:'RBAR/CTG',costCenter:'909439',pbx:'FV Asterisk',site:'Bua'},
    {id: 4,action:'../../assets/delete icon.png',areaCode:'+4173(2)7287', phoneNo: '7287', subscriber: 'Rio Ferdinand', connection: 'BCS IP (ACM)',department:'RBAR/COR',costCenter:'909200',pbx:'FV Asterisk',site:'Bua'}
  ]

  constructor(private router: Router) {}

  goToAddPage() {
    this.router.navigate(['order', 'add']); // Navigate to the 'order' route without leading slash
  }
  
  goToChangePage() {
    this.router.navigate(['order', 'change']); // Navigate to the 'order/change' route without leading slash
  }

}
