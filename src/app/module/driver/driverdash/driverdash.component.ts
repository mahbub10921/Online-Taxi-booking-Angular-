import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
import { IncomingRequest } from 'src/app/inter/request';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { StorageService } from 'src/app/loginService/storage.service';
import { data } from 'jquery';
import { BookingList } from 'src/app/inter/driverBookingList';
import { DriverEarnings } from 'src/app/inter/driverEarnings';

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
idd:number;

// url = 'http://localhost:8080/websocket'
// client: any;
// greeting: string[] = [];



booking1:BookingList[];


booking:any={
  id:null,
  date_booked:null,
  ref_code:null,
  pickup:null,
  dropup:null,
  status:null,
  fare:null,
  state:null
}

driverEarnings:DriverEarnings;









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

new:boolean=false;



id= Number(localStorage.getItem("id"));
// numberId = Number(this.stringId);


newReqObj: any;

myObject:IncomingRequest;
myObject2:BookingList;
myObject3:BookingList;


constructor(private storageService:StorageService,
  private router:Router,
  private service:ServiceService){


}
  ngOnInit(): void {
     this.service.getBooked().subscribe((abc:BookingList[])=>{this.booking1=abc})

    
    this.updateSubscription = interval(5000).subscribe(val =>{
      this.getData()
      
    })
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




    this.service.getActiveBookingList().subscribe((abc:BookingList)=>{this.myObject3=abc
      this.new = false;

      if(this.myObject3.state){
        console.log('tttttttttttt');
        
      
        
        this.new = true;
      }


       })






    
}


submit(){
  console.log(this.myObject)
this.id= Number(localStorage.getItem("id"));
console.log('id---1', this.id);
}


confirm(){
  this.service.setRequestFalse(this.myObject.id).subscribe();
  this.service.setTaxiFalse(this.id).subscribe();
  
  console.log('id---2', this.id);

  this.myObject2 = {
    id:null,
    date_booked:new Date(),
    ref_code:Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000,
    pickup:this.myObject.pickup,
    drop:this.myObject.dropup,
    status:'pending',
    fare:this.myObject.fare,
    state:null
  }

  this.service.addNewBooking(this.myObject2).subscribe()


  localStorage.removeItem("id");
}

ruhul:DoubleRange;

dropup(id:number){
  
  this.idd=id
  console.log("eitai" + this.idd);
  
  this.service.setDriverBookingFalse(this.idd).subscribe()
this.service.getFair(this.myObject3.fare).subscribe((abc:any)=>{this.ruhul=abc});
this.service.setTaxiTrue(this.id).subscribe();
this.service.getEarnings(1).subscribe((abc:DriverEarnings)=>{this.driverEarnings=abc})
// this.service.getBooked().subscribe((abc:BookingList[])=>{this.booking1=abc})

}







}







// buttonColor = 'white';

// togglePopup() {
//   this.myObject.status = !this.myObject.status;
//   this.buttonColor = this.myObject.status ? 'red' : 'white';
// }

// showForm() {
//   // Handle showing the form and performing any other necessary actions
//   // You can use a separate flag or method to control the form visibility
//   // For example:
//   // this.showFormFlag = true;
//   // Or trigger a modal or dialog component to display the form
//   // based on your preferred approach.
//   // Reset the button color to white after showing the form:
//   this.buttonColor = 'white';
// }








