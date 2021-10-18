import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  constructor (
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges: " + changes);
  }
  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit: chamado uma vez após ngDoCheck");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked: chamado após ngAfterContentInit e a cada subsequente ngDoCheck");
  }


}
