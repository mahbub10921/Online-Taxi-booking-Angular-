import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
import { IncomingRequest } from 'src/app/inter/request';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { StorageService } from 'src/app/loginService/storage.service';

@Component({
  selector: 'app-driverdash',
  templateUrl: './driverdash.component.html',
  styleUrls: ['./driverdash.component.css'],
  animations: [
    trigger('blinkAnimation', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false <=> true', animate('0.5s')),
    ]),
  ],




})
export class DriverdashComponent {
title1="Motaleb"

// url = 'http://localhost:8080/websocket'
// client: any;
// greeting: string[] = [];






connection(){
  // let ws = new SockJS(this.url);
  // this.client = Stomp.over(ws);
  let that = this;

//   this.client.connect({}, () => {
//     that.client.subscribe("/topic/greeting", (message: { body: any; }) => {
//       if(message.body) {
//         this.greeting.push(message.body);
//     //$(".msg").append(this.greeting)
//     // $(".msg").html(this.greeting)
//     //alert(this.greeting);
//     //console.log(this.greeting);
//       }
//     });
//   });
// }
}


private updateSubscription: Subscription;


newReq:boolean = false;
reqQuent:number = 0;

newReqObj: any;

myObject:IncomingRequest;

constructor(private storageService:StorageService,
  private router:Router,
  private service:ServiceService){


}
  ngOnInit(): void {
    
    this.updateSubscription = interval(3000).subscribe(val =>{
      this.getData()})
  }

  getData(){

    console.log('Hello--------------');
    this.service.getRequest().subscribe((abc:IncomingRequest)=>{this.myObject=abc
      console.log(this.myObject)
      this.newReq = false;

if(this.myObject.status){
  console.log('tttttttttttt');
  
  this.newReq = true;
}
    })
    // console.log('pickup',this.myObject.pickup)
    // console.log(this.myObject.dropup)



}


submit(){
  console.log("aggggggeeeeeeeeee")
  console.log(this.myObject)
  console.log("poreeeeeeeeee")

}


confirm(){
  this.service.updateRequest(152).subscribe();
}







buttonColor = 'white';

togglePopup() {
  this.myObject.status = !this.myObject.status;
  this.buttonColor = this.myObject.status ? 'red' : 'white';
}

showForm() {
  // Handle showing the form and performing any other necessary actions
  // You can use a separate flag or method to control the form visibility
  // For example:
  // this.showFormFlag = true;
  // Or trigger a modal or dialog component to display the form
  // based on your preferred approach.
  // Reset the button color to white after showing the form:
  this.buttonColor = 'white';
}
}







