import { Component } from '@angular/core';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
title1='Mahbub';

isSidebarOpen = false;
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    items = [
      { name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
      { name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' },
      { name: 'Bob Johnson', email: 'bob@example.com', phone: '5555555555' },
      // Add more data as needed
    ];
  
    searchQuery: string = '';
  
    get filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.phone.includes(this.searchQuery)
      );
    }

}
