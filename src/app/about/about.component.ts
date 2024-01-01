import { Component, OnInit } from '@angular/core';
import i18next from '../../i18n';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

/* Random Image from this subset from Arabian Nights */
captionSet = ['City of Brass',
              'Library of Alexandria',
              'Oasis',
              'Shahrazad',
              'Bazaar of Baghdad',
              'Ali Baba',
              'Aladdin\'s Ring',
              'Dandan',
              'Juzam Djinn',
              'King Suleiman',
              'Abu Ja\'far',
              'Aladdin',
            ]

URLSet = [  'https://www.mtgpics.com/pics/art/ara/016_1.jpg', // City of Brass
            'https://www.mtgpics.com/pics/art/ara/056.jpg',   // Library of Alexandría
            'https://www.mtgpics.com/pics/art/ara/066.jpg',   // Oasis
            'https://www.mtgpics.com/pics/art/ara/081_1.jpg', // Shahrazad
            'https://www.mtgpics.com/pics/art/ara/009.jpg',   // Bazaar of Baghdad
            'https://www.mtgpics.com/pics/art/ara/005.jpg',   // Ali Baba
            'https://www.mtgpics.com/pics/art/ara/004.jpg',   // Aladdin's Ring
            'https://www.mtgpics.com/pics/art/ara/020.jpg',   // Dandan
            'https://www.mtgpics.com/pics/art/ara/052_1.jpg', // Juzam Djinn
            'https://www.mtgpics.com/pics/art/ara/054.jpg',   // King Suleiman
            'https://www.mtgpics.com/pics/art/ara/001.jpg',   // Abu Ja'far
            'https://www.mtgpics.com/pics/art/ara/002.jpg',   // Aladdin
          ]
 
  randomArabianNightsImage = '';
  imageCaption = ''
  
  /* i18n */
  AN1_1 = i18next.t('about:AN.msg1.1')
  AN1_2 = i18next.t('about:AN.msg1.2')
  AN2_1 = i18next.t('about:AN.msg2.1')
  AN2_2 = i18next.t('about:AN.msg2.2')
  AN2_3 = i18next.t('about:AN.msg2.3')

  OBX_title = i18next.t('about:OBX.title')
  OBX_G1 = i18next.t('about:OBX.G1')
  OBX_G2 = i18next.t('about:OBX.G2')
  OBX_G3 = i18next.t('about:OBX.G3')
  OBX_G4 = i18next.t('about:OBX.G4')
  OBX_G5 = i18next.t('about:OBX.G5')
  OBX_G6 = i18next.t('about:OBX.G6')

  THX_title = i18next.t('about:THX.title')
  THX_msg = i18next.t('about:THX.msg')

  COL_title = i18next.t('about:COL.title')
  COL_msg = i18next.t('about:COL.msg')


  constructor() { }

  ngOnInit(): void {
    var select = Math.floor(Math.random()*this.URLSet.length)
    this.randomArabianNightsImage = this.URLSet[select]
    this.imageCaption = this.captionSet[select]
  }

}
