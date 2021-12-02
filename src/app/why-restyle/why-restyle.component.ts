import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-restyle',
  templateUrl: './why-restyle.component.html',
  styleUrls: ['./why-restyle.component.css']
})
export class WhyRestyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
