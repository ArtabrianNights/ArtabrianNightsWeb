import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
    var select = Math.floor(Math.random()*this.URLSet.length)
    this.randomArabianNightsImage = this.URLSet[select]
    this.imageCaption = this.captionSet[select]
  }

}
