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


}
