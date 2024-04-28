import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ChangeComponent } from './change/change.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    { path: '', redirectTo: '/order', pathMatch: 'full' },
    { path:'order',component:OrderComponent},
    {path:'order/change', component:ChangeComponent},
    {path:'order/add', component:AddComponent}
];
