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
        routerLink: "/ArtabrianNightsWeb/",
        classMenu: "md:block sm:hidden",
        classDropMenu: "sm:block md:hidden"
      },
      {
        label: 'Quienes somos',
        icon: 'group',
        routerLink: "about",
        classMenu: "md:block sm:hidden",
        classDropMenu: "sm:block md:hidden"
      },
      {
        label: 'Calendario de eventos',
        icon: 'calendar_month',
        routerLink: 'calendar',
        classMenu: "lg:block md:hidden",
        classDropMenu: "md:block lg:hidden"
      },
      {
        label: 'Hemeroteca',
        icon: 'slideshow',
        routerLink: 'archive',
        classMenu: "lg:block md:hidden",
        classDropMenu: "md:block lg:hidden"
      },
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }