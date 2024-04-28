import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  shoppingCart: any [] = [
    {id: 1,action:'../../assets/delete icon.png', connection: '1',article:'Contact Center Agent Project Specific Solution',quantity:'1',additionalInfo:'',type:'monthly',saPrice:'42.20',obligation:'yes',single:'no',remarks:''},
    {id: 2,action:'../../assets/delete icon.png', connection: '1',article:'Class Of Restriction class SWF4',quantity:'1',additionalInfo:'',type:'monthly',saPrice:'0.00',obligation:'yes',single:'no',remarks:''},
    {id: 3,action:'../../assets/delete icon.png', connection: '2',article:'Contact Center Agent Project Specific Solution',quantity:'1',additionalInfo:'',type:'monthly',saPrice:'42.20',obligation:'yes',single:'no',remarks:''},
    {id: 4,action:'../../assets/delete icon.png', connection: '2',article:'Class Of Restriction class SWF4',quantity:'1',additionalInfo:'',type:'monthly',saPrice:'0.00',obligation:'yes',single:'no',remarks:''}
  ]

  articleList: any []=[
    {id:1,action:'../../assets/add.png',article:'Additional fee for express order',type:'one-time',saPrice:'31.00',install:'',change:'',reduction:'',single:'no',remark:''},
    {id:2,action:'../../assets/add.png',article:'Call Diversion externally',type:'monthly',saPrice:'0.00',install:'11.90',change:'',reduction:'12.65',single:'no',remark:''}
  ]

  constructor(private router: Router) {}

  goToAddPage() {
    this.router.navigate(['order', 'add']); // Navigate to the 'order' route without leading slash
  }
  
  goToChangePage() {
    this.router.navigate(['order', 'change']); // Navigate to the 'order/change' route without leading slash
  }

}
