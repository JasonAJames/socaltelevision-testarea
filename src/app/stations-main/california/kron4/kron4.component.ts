import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kron4',
  templateUrl: './kron4.component.html',
  styleUrls: ['./kron4.component.css', '../../../app.component.css']
})
export class Kron4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "KRON4 San Francisco"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
