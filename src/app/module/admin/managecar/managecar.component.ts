import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxi } from 'src/app/inter/taxi';

@Component({
  selector: 'app-managecar',
  templateUrl: './managecar.component.html',
  styleUrls: ['./managecar.component.css']
})
export class ManagecarComponent {
  post!:Taxi[];


  constructor(
    public service:ServiceService,
    private route:ActivatedRoute,
    private router:Router
  ){}



  ngOnInit(): void {
    this.service.getTaxi().subscribe((abc:Taxi[])=>{this.post=abc})
    console.log(this.post)
  }

  deletePost(id:number){
this.service.deleteTask(id).subscribe(res=>{
this.post=this.post.filter(item=>item.id !==id);

})

  }

  myfunction(){
    this.service.getTask().subscribe((abc:Taxi[])=>{this.post=abc});
    console.log(this.post);

  }
}
