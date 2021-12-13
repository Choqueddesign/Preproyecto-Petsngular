import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarHeader: string;

  constructor() { 
    this.navbarHeader = "d-block"
  }

  ngOnInit(): void {
  }

  navbarandHeader(route: boolean):void{
    route? this.navbarHeader = "d-block":this.navbarHeader="d-none"
  }

}
