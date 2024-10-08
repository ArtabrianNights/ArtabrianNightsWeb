import { Component } from '@angular/core';
import i18next from '../../i18n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  greeting = i18next.t('home:Greeting');
  archive = i18next.t('toolbar:Archive').toLowerCase();
  upcoming = i18next.t('home:Upcoming');  
  registration = i18next.t('home:Registration');
  date = i18next.t('home:date');

}

