import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hj-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMobileMenuClick() {
    this.menuOpen = !this.menuOpen;
  }

}
