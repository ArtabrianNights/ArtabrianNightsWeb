import { Component } from '@angular/core';
import i18next from '../../i18n';

@Component({
  selector: 'app-hemeroteca',
  templateUrl: './hemeroteca.component.html',
  styleUrls: ['./hemeroteca.component.scss']
})
export class HemerotecaComponent {

  limo_msg= i18next.t('archive:BasesLIMO');
  cEDH_msg= i18next.t('archive:BasescEDH');

}
