import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoyalRestaurantComponent } from './restaurants/royal-restaurant/royal-restaurant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'royal-restaurant', component: RoyalRestaurantComponent },
  { path: 'menu', redirectTo: 'royal-restaurant', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
