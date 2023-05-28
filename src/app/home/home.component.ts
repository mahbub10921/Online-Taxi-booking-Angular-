import { Component, OnInit } from '@angular/core';
import { StorageService } from '../loginService/storage.service';
import { LoginServiceService } from '../loginService/login-service.service';

import { EventBusService } from '../event/event-bus.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { ServiceService } from '../service/service.service';
import { Route } from '../inter/route';
import { Router } from '@angular/router';

declare const auto: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private roles: any[] = [{ roleName: '', roleDescription: '' }]
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showNormalBoard = false;
  isNab = true;
  username?: string;
  eventBusSub?: Subscription;

  fromLocation: any;
  toLocation: any;

  form!: FormGroup;
  List!: Route[];



  constructor(private storageService: StorageService,
    private authService: LoginServiceService,
    private eventBusService: EventBusService,
    private router: Router,
    public service: ServiceService,
    private fb: FormBuilder
  ) { }




  ngOnInit(): void {

    this.username = localStorage.getItem("name");
    console.log('raj------' + this.username);




    this.service.getRoute().subscribe((abc: Route[]) => { this.List = abc })

    this.form = new FormGroup({
      from_: new FormControl(''),
      to_: new FormControl(''),
    });


    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.role
      if (this.roles.some(item => item.roleName === 'Admin')) {
        this.router.navigateByUrl('/admin')
        this.isNab = false;
      }

      if (this.roles.some(item => item.roleName === 'Driver')) {
        this.router.navigateByUrl('/driver')
        this.isNab = false;
      }
      this.username = user.userName;

    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }


double!:DoubleRange;
  pickup: string = '';
  dropup: string = '';
  latitude1!: DoubleRange;
  longitude1!: DoubleRange;
  latitude2!: DoubleRange;
  longitude2!: DoubleRange;
  distance!: any;
  Xfair!: number;
  XLfair!:number;
  
  nnn!:string;
  round(){
    console.log('hello')
  // console.log((Math.round(Number(this.fair)* 100 )/100).toFixed(2));
  } 


  submit() {

    this.fromLocation = this.form.value.from_;
    this.toLocation = this.form.value.to_;
    console.log('----', this.fromLocation);
    console.log('----', this.toLocation);
    this.loop();

    if (this.fromLocation === null || this.toLocation === null || this.fromLocation === '' || this.toLocation === '') {
      alert("Please give proper location!")
    }

    this.calculatingFair();
    this.round();

    //   this.pickup=this.form.value.from_;
    //   this.dropup=this.form.value.to_;
      localStorage.removeItem("pickup")
      localStorage.setItem("pickup",this.toLocation)
      localStorage.removeItem("dropup")
      localStorage.setItem("dropup",this.fromLocation)
      

    this.router.navigateByUrl('/availcab');

  }


  loop() {

    for (var product of this.List) {

      if (product.location === this.fromLocation) {
        this.latitude1 = product.latitude;
        this.longitude1 = product.longitude;
      }

      if (product.location === this.toLocation) {
        this.latitude2 = product.latitude;
        this.longitude2 = product.longitude;
      }
    }

   
  }

  calculatingFair() {

    console.log('-----------------', this.latitude1, this.longitude1, this.latitude2, this.longitude2);
    

    this.service.findDistance(this.latitude1, this.longitude1, this.latitude2, this.longitude2, 'km').subscribe((abc) => {
      this.distance = abc
      console.log(this.distance)
      localStorage.setItem("dis", this.distance)
     
     
     
     
      // this.Xfair = Number(this.distance) * 50;
      // this.XLfair = Number(this.distance) * 80;

      

      localStorage.removeItem("varaX");
      localStorage.setItem("varaX", this.Xfair+'')
      localStorage.removeItem("varaXL");
      localStorage.setItem("varaXL", this.XLfair+'')
    })

  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }

  reloadPage(): void {
    window.location.reload();
    
  }




}









