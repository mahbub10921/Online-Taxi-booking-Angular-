import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {

  constructor(

    public service:ServiceService,
    private router:Router
  ){
    
  }


form!:FormGroup;

submit(){
console.log(this.form.value);
console.log('ok');

this.service.addDriver(this.form.value).subscribe((res:any)=>{
  console.log('ok');
  this.router.navigateByUrl('managecar');
})
this.ngOnInit();

}


ngOnInit(): void {
  this.form = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    address:new FormControl(''),
    number:new FormControl(''),
    nid:new FormControl(''),
    

});
}

}
