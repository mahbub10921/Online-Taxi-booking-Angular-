import { Component } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
declare const auto:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TaxiBooking';
  url = 'http://localhost:8080/websocket'
  client: any;
  greeting: any[] = [];

  // connection(){
  //   let ws = new SockJS(this.url);
  //   this.client = Stomp.over(ws);
  //   let that = this;
	
  //   this.client.connect({}, () => {
  //     that.client.subscribe("/topic/greeting", (message: { body: any; }) => {
  //       if(message.body) {

  //         // console.log(JSON.parse(message.body))
  //         // this.greeting.push(JSON.parse(message.body));



  //         // this.greeting.forEach(element => {
  //         //   console.log(element);
            
  //         // });
	// 	  // alert("New Message!");
	// 	  //console.log(this.greeting);
  //       }
  //     });
  //   });
  // }
}
