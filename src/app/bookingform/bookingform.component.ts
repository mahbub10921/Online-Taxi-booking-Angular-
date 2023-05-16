import { Component } from '@angular/core';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {



  

  blinkState: 'hidden' | 'visible' = 'hidden';

// Call this method when a new request arrives to trigger the blinking effect
showBlinkingPopup() {
  this.blinkState = 'visible';
  setTimeout(() => {
    this.blinkState = 'hidden';
  }, 3000); // Change back to hidden state after 3 seconds (adjust the duration as needed)
}


}
