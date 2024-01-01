import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuItem, langMenuItems } from './menu-item';
//import { environment, langs } from '../../environments/environments';
import i18next from '../../i18n';
//import useTranslation from 'i18next';
//import Trans from 'i18next';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  showLangMenu: boolean = false;
  langMenuMsg = i18next.t('toolbar:LangMenuMsg');

  menuItems: MenuItem[] = [
    {
      label: i18next.t('toolbar:Home'),
      icon: 'house',
      routerLink: "",
      classMenu: "md:block sm:hidden",
      classDropMenu: "sm:block md:hidden"
    },
    {
      label: i18next.t('toolbar:About'),
      icon: 'group',
      routerLink: "about",
      classMenu: "md:block sm:hidden",
      classDropMenu: "sm:block md:hidden"
    },
    {
      label: i18next.t('toolbar:Calendar'),
      icon: 'calendar_month',
      routerLink: 'calendar',
      classMenu: "lg:block md:hidden",
      classDropMenu: "md:block lg:hidden"
    },
    {
      label: i18next.t('toolbar:Archive'),
      icon: 'slideshow',
      routerLink: 'archive',
      classMenu: "lg:block md:hidden",
      classDropMenu: "md:block lg:hidden"
    },
    {
      label: i18next.t('toolbar:Language'),
      icon: 'language',
      routerLink: '',
      classMenu: "hidden",
      classDropMenu: "md:block lg:hidden"
    },
  ];

  langMenuItems: langMenuItems[] = [
    {
      label: 'English',
      flag: 'gb',
      lng: 'en'
    },
    {
      label: 'Español',
      flag: 'es',
      lng: 'es'
    },
    {
      label: 'Galego',
      flag: 'es-ga',
      lng: 'gl'
    }
  ]

  changeLng(lng: string) {
    i18next.changeLanguage(lng);
    document.location.reload()
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  
  
}