import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoisComponent } from './pois/pois.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'pois',  component: PoisComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
