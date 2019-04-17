import { Component, Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Route } from '@angular/router';
// import { router } from './app.router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  './bower_components/semantic/dist/components/reset.css',
  './bower_components/semantic/dist/components/site.css',
  './bower_components/semantic/dist/components/container.css',
  './bower_components/semantic/dist/components/grid.css',
  './bower_components/semantic/dist/components/header.css',
  './bower_components/semantic/dist/components/image.css',
  './bower_components/semantic/dist/components/menu.css',
  './bower_components/semantic/dist/components/divider.css',
  './bower_components/semantic/dist/components/dropdown.css',
  './bower_components/semantic/dist/components/segment.css',
  './bower_components/semantic/dist/components/button.css',
  './bower_components/semantic/dist/components/list.css',
  './bower_components/semantic/dist/components/icon.css',
  './bower_components/semantic/dist/components/sidebar.css',
  './bower_components/semantic/dist/components/transition.css'
  
]
})





export class AppComponent implements OnInit {
  route: string;
  d = new Date();

public evilTitle: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        console.log("the route is: " + this.route); 
    
      } 
    });
  }

copyrightDate = this.d.getFullYear();


  ngOnInit() {
    // this.evilTitle = location.href;
    this.evilTitle = this.route;
  }

  title = 'SoCalTelevision.com';

  
}
