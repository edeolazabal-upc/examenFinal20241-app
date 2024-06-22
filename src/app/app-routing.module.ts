import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountBarComponent } from './components/count-bar/count-bar.component';
import { SumBarComponent } from './components/sum-bar/sum-bar.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'count', pathMatch: 'full'},
  {path: 'count', component: CountBarComponent},
  {path: 'sum', component: SumBarComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
