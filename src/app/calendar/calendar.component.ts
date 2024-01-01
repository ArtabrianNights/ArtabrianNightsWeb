import { Component } from '@angular/core';
import i18next from '../../i18n';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  /* i18n */
  title = i18next.t('calendar:title')
  msg = i18next.t('calendar:msg')

}
