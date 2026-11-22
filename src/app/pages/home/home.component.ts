import { Component } from '@angular/core';

interface RestaurantLink {
  name: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurants: RestaurantLink[] = [
    { name: 'Royal Restaurant', path: '/royal-restaurant' }
  ];
}
