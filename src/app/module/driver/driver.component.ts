import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stomp } from '@stomp/stompjs';
import { Subscription, interval } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { IncomingRequest } from 'src/app/inter/request';
import { StorageService } from 'src/app/loginService/storage.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
title1='Kamal'

// private updateSubscription: Subscription;


// newReq:boolean = false;
// reqQuent:number = 0;

// newReqObj: any;

// request:IncomingRequest;

constructor(private storageService:StorageService,
  private router:Router,
  private service:ServiceService){


}
  ngOnInit(): void {
//     this.updateSubscription = interval(3000).subscribe(val =>{this.getData()})
  }

//   getData(){

//     console.log('Hello--------------');
//     this.service.getRequest().subscribe((abc:IncomingRequest)=>{this.request=abc})
//     console.log(this.request)

// }


  logout(): void {
    this.storageService.clean();
    window.location.reload();
    this.router.navigateByUrl('/home')


  }

    

}


