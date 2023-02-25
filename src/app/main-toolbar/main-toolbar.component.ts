import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  
    menuItems: MenuItem[] = [
      {
        label: 'Portada',
        icon: 'house',
        routerLink: "/",
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true,
      },
      {
        label: 'Quienes somos',
        icon: 'group',
        routerLink: "about",
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true,
      },
      {
        label: 'Calendario de eventos',
        icon: 'calendar_month',
        routerLink: 'calendar',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true,
      },
      {
        label: 'Hemeroteca',
        icon: 'slideshow',
        routerLink: 'archive',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true,
      },
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }