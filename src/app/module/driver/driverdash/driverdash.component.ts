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
import { FormControl, FormGroup } from '@angular/forms';
import { Details } from 'src/app/inter/details';

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
  driverName: string = localStorage.getItem("drivername")
  idd: number;


  details: Details;



  details1: Details = {
    id:null,
    date_booked: null,
    refCode:null,
    pickup: null,
    dropup: null,
    fare: null,
    percentage: null
  }


  booking1: BookingList[] = [{
    id: null,
    date_booked: null,
    refCode: null,
    pickup: null,
    dropup: null,
    status: null,
    fare: null,
    state: null
  }]


  booking: any = {
    id: null,
    date_booked: null,
    ref_code: null,
    pickup: null,
    dropup: null,
    status: null,
    fare: null,
    state: null
  }

  driverEarnings: DriverEarnings = {
    id: 0,
    earnings: 0
  };



  private updateSubscription: Subscription;


  newReq: boolean = false;
  reqQuent: number = 0;

  new: boolean = false;



  id = Number(localStorage.getItem("id"));
  // numberId = Number(this.stringId);


  newReqObj: any;

  myObject: IncomingRequest = {
    id: 0,
    pickup: '',
    dropup: '',
    fare: 0,
    status: true,
    clientName: '',
    phone: '',
    driverName: ''

  };
  myObject2: BookingList;


  myObject3!: BookingList;




  constructor(private storageService: StorageService,
    private router: Router,
    private service: ServiceService) {


  }
  ngOnInit(): void {
    this.service.getEarnings(1).subscribe((abc: DriverEarnings) => { this.driverEarnings = abc })

    this.service.getBooked().subscribe((abc: BookingList[]) => {
      this.booking1 = abc
      console.log("this.booking1-----------------------", this.booking1);
    })


    this.updateSubscription = interval(5000).subscribe(val => {
      this.getData()

    })
  }

  getData() {

    this.service.getRequest().subscribe((abc: IncomingRequest) => {
      this.myObject = abc
      console.log(this.myObject)
      this.newReq = false;
      if (this.myObject != null) {
        if (this.myObject.status && this.myObject.driverName.toLowerCase() === this.driverName.toLowerCase()) {
          console.log('tttttttttttt');
          this.newReq = true;
        }
      }

    })



    console.log('suru--------------');

    this.service.getActiveBookingList().subscribe((abc: BookingList) => {
      this.myObject3 = abc
      console.log('----this.myObject3---', this.myObject3);
      this.new = false;
      if (this.myObject3 != null) {
        if (this.myObject3.state) {
          console.log('tttttttttttt');
          this.new = true;
        }
      }

    })

  }


  submit() {
    console.log(this.myObject)
    this.id = Number(localStorage.getItem("id"));
    console.log('id---1', this.id);
  }


  confirm() {
    this.service.setRequestFalse(this.myObject.id).subscribe();
    this.service.setTaxiFalse(this.id).subscribe();

    console.log('id---2', this.id);

    this.myObject2 = {
      id: null,
      date_booked: new Date(),
      refCode: Math.floor(Math.random() * 90000) + 10000,
      pickup: this.myObject.pickup,
      dropup: this.myObject.dropup,
      status: 'pending',
      fare: this.myObject.fare,
      state: null
    }

    this.service.addNewBooking(this.myObject2).subscribe()


    localStorage.removeItem("id");
  }



  ruhul: DoubleRange;



  dropup(id: number) {

    this.idd = id
    console.log("eitai" + this.idd);

    this.service.setDriverBookingFalse(this.idd).subscribe()
    this.service.getFair(this.myObject3.fare).subscribe((abc: any) => { this.ruhul = abc });
    this.service.setTaxiTrue(this.id).subscribe();
    this.ngOnInit();
    this.reloadPage();
    console.log(this.driverEarnings.earnings)

     
     

    
}



// num1: DoubleRange = this.myObject3.fare;
// DoubleRange = .25;
// DoubleRange1 = Number(this.num1) * this.DoubleRange



  reloadPage() {
    this.details1 = {id:null,refCode:this.myObject3.refCode, date_booked: this.myObject3.date_booked, pickup: this.myObject3.pickup, dropup: this.myObject3.dropup, fare: this.myObject3.fare, percentage:this.myObject3.fare*.25 };
    this.service.saveDetails(this.details1).subscribe();
    window.location.reload();
    

  }



  // form: FormGroup = new FormGroup({

  //   id: new FormControl(this.myObject.id),
  //   pickup: new FormControl(this.myObject.pickup),
  //   dropup: new FormControl(this.myObject.dropup),
  //   fare: new FormControl(this.myObject.fare),
  //   status: new FormControl(this.myObject.status),
  //   clientName: new FormControl(this.myObject.clientName),
  //   phone: new FormControl(this.myObject.phone)

  // })





















}















