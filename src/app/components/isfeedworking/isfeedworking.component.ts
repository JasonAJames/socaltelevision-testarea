import { Component, Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-isfeedworking',
  templateUrl: './isfeedworking.component.html',
  styleUrls: ['./isfeedworking.component.css']
})
export class IsfeedworkingComponent implements OnInit {

  route: string;
  d = new Date();
  local: string;

public evilTitle: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();

       // this.YesFeedWorks();

        console.log("the route is: " + this.route); 
    
      } 
    });
  }

  YesFeedWorks() {
    this.local = this.route;
    console.log("The feed at " + this.local + " is WORKING! YAH!!!");
    this.evilTitle = this.local;
  }

  FeedNotWorking() {
    this.local = this.route;
    console.log("The Feed at " + this.local + " has been reported not to work. PLEASE CHECK " + this.local );
    this.evilTitle = this.local;
  }

  ngOnInit() {
  }

}
