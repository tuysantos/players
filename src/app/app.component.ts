import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']*/
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title = 'players';

  constructor(){}

  ngOnInit(){
    console.log("test 123");
  }
}
