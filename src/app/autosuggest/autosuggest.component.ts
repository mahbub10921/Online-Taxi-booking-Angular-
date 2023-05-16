import { Component, OnInit } from '@angular/core';
declare const auto:any;
@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.css']
})
export class AutosuggestComponent implements OnInit{

  // searchable:any=['khilgaon','basabo','rampura'];

  fun(){
    auto();
  }

  ngOnInit(): void {
    this.fun();
  }



}
