import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/inter/details';
import { StorageService } from 'src/app/loginService/storage.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit{
title1='Mahbub';

detail:Details[];


constructor(private storageService: StorageService,
  private router: Router,
  private service: ServiceService) {
}
  ngOnInit(): void {
    this.service.getDetails().subscribe((abc:Details[])=>{this.detail=abc})
  }


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
    searchQuery1: Date = null;
    searchQuer2: number = 0;
  
    get filteredItems() {
      return this.detail.filter(item =>
        //  item.date_booked.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.pickup.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.dropup.includes(this.searchQuery)
      );
    }

}
