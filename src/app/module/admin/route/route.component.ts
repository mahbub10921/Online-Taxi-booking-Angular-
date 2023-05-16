import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from 'src/app/inter/route';
// import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  post!:Route[];


  constructor(
    public service:ServiceService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  deletePost(location:string){
    this.service.deleteRoute(location).subscribe(res=>{
    this.post=this.post.filter(item=>item.location !==location);
    
    })
    }

  ngOnInit(): void {
    this.service.getRoute().subscribe((abc:Route[])=>{this.post=abc})
    console.log(this.post)
  }

}
