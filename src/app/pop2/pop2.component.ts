import { Component } from '@angular/core';

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.component.html',
  styleUrls: ['./pop2.component.css']
})
export class Pop2Component {

  // blinkState: 'hidden' | 'visible' = 'hidden';

  // // Call this method when a new request arrives to trigger the blinking effect
  // showBlinkingPopup() {
  //   this.blinkState = 'visible';
  //   setTimeout(() => {
  //     this.blinkState = 'hidden';
  //   }, 3000); // Change back to hidden state after 3 seconds (adjust the duration as needed)
  // }
  
  // ecentRequests: RecentRequest[] = [];

  // constructor(private adminDashboardService: AdminDashboardService) { }

  // ngOnInit(): void {
  //   this.adminDashboardService.getRecentRequests()
  //     .subscribe(requests => this.recentRequests = requests);

  logout(){}
  toggleSidebar(){}
  }
  


