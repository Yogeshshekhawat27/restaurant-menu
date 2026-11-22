import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  type: 'Veg' | 'Non-Veg';
  emoji: string;
}

@Component({
  selector: 'app-royal-restaurant',
  templateUrl: './royal-restaurant.component.html',
  styleUrls: ['./royal-restaurant.component.css']
})
export class RoyalRestaurantComponent implements OnInit {
  readonly restaurantName = 'Royal Restaurant';
  qrCodeImage = '';
  menuUrl = '';

  categories = ['Starters', 'Main Course', 'Rice & Biryani', 'Drinks', 'Desserts'];
  activeCategory = 'Starters';

  menuItems: MenuItem[] = [
    { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled with peppers', price: 260, category: 'Starters', type: 'Veg', emoji: '🧀' },
    { name: 'Veg Manchurian', description: 'Crispy vegetable balls in spicy sauce', price: 220, category: 'Starters', type: 'Veg', emoji: '🥟' },
    { name: 'Chicken Tikka', description: 'Tender chicken with smoky Indian spices', price: 320, category: 'Starters', type: 'Non-Veg', emoji: '🍗' },
    { name: 'Butter Chicken', description: 'Creamy tomato curry with butter and spices', price: 380, category: 'Main Course', type: 'Non-Veg', emoji: '🍛' },
    { name: 'Dal Makhani', description: 'Slow-cooked black lentils with cream', price: 280, category: 'Main Course', type: 'Veg', emoji: '🥘' },
    { name: 'Paneer Butter Masala', description: 'Paneer cubes in rich buttery gravy', price: 330, category: 'Main Course', type: 'Veg', emoji: '🍲' },
    { name: 'Chicken Biryani', description: 'Fragrant basmati rice with spiced chicken', price: 360, category: 'Rice & Biryani', type: 'Non-Veg', emoji: '🍚' },
    { name: 'Veg Biryani', description: 'Basmati rice cooked with vegetables and herbs', price: 270, category: 'Rice & Biryani', type: 'Veg', emoji: '🍚' },
    { name: 'Jeera Rice', description: 'Steamed basmati rice with cumin', price: 180, category: 'Rice & Biryani', type: 'Veg', emoji: '🍚' },
    { name: 'Fresh Lime Soda', description: 'Lime, soda and a choice of sweet or salty', price: 120, category: 'Drinks', type: 'Veg', emoji: '🍋' },
    { name: 'Mango Lassi', description: 'Chilled yogurt drink blended with mango', price: 150, category: 'Drinks', type: 'Veg', emoji: '🥤' },
    { name: 'Gulab Jamun', description: 'Soft milk dumplings in cardamom syrup', price: 140, category: 'Desserts', type: 'Veg', emoji: '🍮' },
    { name: 'Ice Cream', description: 'A scoop of vanilla, chocolate or strawberry', price: 120, category: 'Desserts', type: 'Veg', emoji: '🍨' }
  ];

  ngOnInit(): void {
    this.menuUrl = `${window.location.origin}/royal-restaurant`;
    this.qrCodeImage =
      `https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=${encodeURIComponent(this.menuUrl)}`;
  }

  get filteredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
  }
}
