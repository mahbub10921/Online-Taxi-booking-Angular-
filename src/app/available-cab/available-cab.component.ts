import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Taxi } from '../inter/taxi';
import { FormControl, FormGroup } from '@angular/forms';
import { IncomingRequest } from '../inter/request';
import { Subscription, interval } from 'rxjs';
import { User } from '../inter/user';





@Component({
  selector: 'app-available-cab',
  templateUrl: './available-cab.component.html',
  styleUrls: ['./available-cab.component.css']
})
export class AvailableCabComponent implements OnInit{
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    // private homeComponent:HomeComponent
  ) { }

  Request: IncomingRequest;
  private subscription: Subscription;

  confirm() {
    this.router.navigateByUrl('/bookingform');
  }

  Form: FormGroup = new FormGroup({
    id: new FormControl(),
    registration: new FormControl(),
    model: new FormControl(),
    company: new FormControl(),
    category: new FormControl(),
    driver: new FormControl(),
    fare: new FormControl(),
  })











  show(tasks: any) {
    this.post1 = tasks;
    console.log(this.post1)
    this.Form = new FormGroup({
      id: new FormControl(this.post1.id),
      registration: new FormControl({value:this.post1.registration, disabled:true}),
      model: new FormControl({value:this.post1.model, disabled:true}),
      company: new FormControl({value:this.post1.company, disabled:true}),
      category: new FormControl({value:this.post1.category, disabled:true}),
      driver: new FormControl({value:this.post1.driver.name, disabled:true}),
      fare: new FormControl({value:(this.post1.fair * this.distance2).toFixed(0), disabled:true})
    })

    console.log('id----', this.post1.id);
    localStorage.setItem("id", String(this.post1.id))

  }























 






  list: any = {
    id: null,
    droup: null,
    pickup: null,
    fare: null,
    status: null,
    clientName:null,
    phone:null,
    driverName:null
  }








  submit() {
    console.log("hello")
    this.list = { id: null, pickup: this.Pick, dropup: this.drop, fare: (this.post1.fair * this.distance2).toFixed(0), status: null,clientName:this.username,phone:this.phone, driverName:this.post1.driver.name }
    this.Request = this.list
    console.log("age")
    console.log(this.Request)
    console.log("pore")


    this.service.saveRequest(this.Request).subscribe((res: any) => {
      console.log('ok');

    })



    console.log(this.Request)
  }

  forms: any = {
    registration: "",
    category: "",
    driver: "",

  }







  phone: string;
  post!: Taxi[];
  username: string;
  id!: number;
  post1!: Taxi;
  Pick: any = '';
  drop: any = '';
  fairX!: number;
  fairXL!: number;
  distance = localStorage.getItem("dis")
  distance2 = Number(this.distance);

  ngOnInit(): void {

    this.username = localStorage.getItem("name");
    console.log("nameeeeeeee" + this.username)

    this.service.getUser(this.username).subscribe({
      next:(abc:string) => {
        this.phone = abc
  
  
        console.log('-----------',this.phone);
      },
      error:console.log
      
    })
    console.log("kireeeeeeeeeeeeeeeeeeee" + this.phone);



    this.service.getActiveTaxi().subscribe((abc: Taxi[]) => { this.post = abc })
    console.log(this.post)

    this.Pick = localStorage.getItem("pickup");
    this.drop = localStorage.getItem("dropup");
    this.fairX = Number(localStorage.getItem("varaX"));
    this.fairXL = Number(localStorage.getItem("varaXL"));

    console.log(this.distance)



    this.id = this.route.snapshot.params['postId']
    this.service.find(this.id).subscribe((data: Taxi) => {
      this.post1 = data;
      // this.Form.setValue(this.post);

    });
    // this.subscription = interval(3000).subscribe(val => {this.getData()
    // })







  }

  message: any = {
    id: null,
    message: null,
    status: null

  }

  getData() {
    this.service.getAdminMessage().subscribe((abc: any) => { this.message = abc });
  }

  deletePost(id: number) {
    this.service.deleteTask(id).subscribe(res => {
      this.post = this.post.filter(item => item.id !== id);

    })

  }









}
