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

  rows = [
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    // Add more rows here
  ];

  displayedRows = this.rows;

  sortTable(column: string) {
    // Implement the sorting logic based on the column
    // Set the sorted rows to the displayedRows variable
  }

  changePageSize(pageSize: number) {
    // Implement the logic to change the number of rows per page
    // Update the displayedRows variable accordingly
  }

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

