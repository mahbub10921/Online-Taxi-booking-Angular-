import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxi } from 'src/app/inter/taxi';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit{

  id!: number;
  post!: Taxi;
  constructor(
    public serve: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  Form: FormGroup = new FormGroup({
    id: new FormControl(),
    registration: new FormControl(),
    model: new FormControl(),
    company: new FormControl(),
    category: new FormControl(),
  })


  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId']
    this.serve.find(this.id).subscribe((data: Taxi) => {
      this.post = data;
      console.log(this.post );
      // this.Form.setValue(this.post);
      this.Form = new FormGroup({
        id: new FormControl(this.post.id),
        registration: new FormControl(this.post.registration),
        model: new FormControl(this.post.model),
        company: new FormControl(this.post.company),
        category: new FormControl(this.post.category),
      })
    });


  }

  submit() {

    console.log(this.Form.value)
    this.Form.value.id = this.id;
    this.serve.update(this.Form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin')
    })
  }


}
