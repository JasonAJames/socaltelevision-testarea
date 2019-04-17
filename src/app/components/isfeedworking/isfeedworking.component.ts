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
  local: string;

public FeedWorkingResponse: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();

       // this.YesFeedWorks();

       // console.log("the route is: " + this.route); 
    
      } 
    });
  }

  YesFeedWorks() {
    this.local = this.route;
    console.log("The feed at " + this.local + " is WORKING! YAH!!!");
    this.FeedWorkingResponse = this.local;
  }

  FeedNotWorking() {
    this.local = this.route;
    console.log("The Feed at " + this.local + " has been reported not to work. PLEASE CHECK " + this.local );
    this.FeedWorkingResponse = this.local;
  }

  ngOnInit() {
  }

}
