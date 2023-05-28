import { Component, OnInit } from '@angular/core';
import { IncomingRequest } from '../inter/request';
//import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  newRequests: IncomingRequest[] = [];
  isModalOpen = false;
  selectedRequest: IncomingRequest | null = null;

  // constructor(private driverDashboardService: DriverDashboardService) { }

  ngOnInit(): void {
    // this.driverDashboardService.getNewRequests()
    //   .subscribe(requests => this.newRequests = requests);
  }

  openRequestDetailsModal(request: IncomingRequest): void {
    this.selectedRequest = request;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedRequest = null;
  }



  condition = false; 

  newReq:boolean = false;



  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }



   w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
   w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }






}

