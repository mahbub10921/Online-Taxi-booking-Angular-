import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(

    public service:ServiceService,
    private router:Router
  ){
    
  }


form!:FormGroup;

submit(){
console.log(this.form.value);
console.log('ok');

this.service.create(this.form.value).subscribe((res:any)=>{
  console.log('ok');
  this.router.navigateByUrl('managecar');
})
this.ngOnInit();

}


ngOnInit(): void {
  this.form = new FormGroup({
    id:new FormControl(''),
    registration:new FormControl(''),
    model:new FormControl(''),
    company:new FormControl(''),
    category:new FormControl(''),


});
}

}
