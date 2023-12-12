import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'artabrian-nights-app';

  // Array of MTG Set Codes
  mtgSets = [ // Core Sets
            'lea', 'leb', '2ed', '3ed', '4ed', 'psum', '5ed', '6ed', '7ed', '8ed',
            '9ed', '10e', 'm10', 'm11', 'm12', 'm13', 'm14', 'm15', 'ori', 'm19',
            'm20', 'm21', 'afr',
            // Expansion Sets
            'arn', 'atq', 'leg', 'drk', 'fem', 'hml', 'ice', 'all', 'csp', 'mir',
            'vis', 'wth', 'tmp', 'sth', 'exo', 'usg', 'ulg', 'uds', 'mmq', 'nem',
            'pcy', 'inv', 'pls', 'apc', 'ody', 'tor', 'jud', 'ons', 'lgn', 'scg',
            'mrd', 'dst', '5dn', 'chk', 'bok', 'sok', 'rav', 'gpt', 'dis', 'tsp',
            'plc', 'fut', 'lrw', 'mor', 'shm', 'eve', 'ala', 'con', 'arb', 'zen',
            'wwk', 'roe', 'som', 'mbs', 'nph', 'isd', 'dka', 'avr', 'rtr', 'gtc',
            'dgm', 'ths', 'bng', 'jou', 'ktk', 'frf', 'dtk', 'bfz', 'ogw', 'soi',
            'emn', 'kld', 'aer', 'akh', 'hou', 'xln', 'rix', 'dom', 'grn', 'rna',
            'war', 'eld', 'thb', 'iko', 'znr', 'khm', 'stx', 'mid', 'vow', 'neo',
            'snc', 'dmu', 'bro', 'one', 'mom', 'mat', 'woe', 'lci',
            // Command Zone Sets
            'van', 'hop', 'arc', 'cmd', 'pc2', 'cm1', 'c13', 'cns', 'c14', 'c15',
            'cn2', 'c16', 'pca', 'cma', 'e01', 'e02', 'c17', 'cm2', 'bbd', 'c18',
            'c19', 'c20', 'znc', 'cc1', 'cmr', 'cmc', 'khc', 'c21', 'afc', 'mic',
            'voc', 'cc2', 'nec', 'ncc', 'clb', 'dmc', '40k', 'brc', 'onc', 'moc',
            'scd', 'cmm', 'ltc', 'woc', 'lcc', 
            // Reprint Sets
            'chr', 'ath', 'brb', 'btd', 'dkm', 'mma', 'mm2', 'ema', 'mm3', 'xren',
            'xrin', 'ima', 'a25', 'uma', 'mh1', '2xm', 'jmp', 'mb1', 'mh2', 'sta',
            'j21', '2x2', 'brr', 'j22', 'mul', 'wot', 'br', 'spg',
            // Beginner Sets
            'por', 'p02', 'ptk', 's99', 's00', 'w16', 'w17', 
            //Duel Decks
            'evg', 'dd2', 'ddc', 'ddd', 'dde', 'ddf', 'ddg', 'ddh', 'ddi', 'ddj',
            'ddk', 'ddl', 'ddm', 'ddn', 'ddo', 'ddp', 'ddq', 'ddr', 'dds', 'ddt',
            'ddu', 
            // From the Vault Sets
            'drb', 'v09', 'v10', 'v11', 'v12', 'v13', 'v14', 'v15', 'v16', 'v17',
            // Premium Deck Series
            'h09', 'pd2', 'pd3', 'md1',
            // Signature Spellbooks
            'ss1', 'ss2', 'ss3',
            // Global Series
            'gs1',
            // Other Supplemental Products
            'tsr', 'dmr', 'ltr', 'who', 'rvr', 'pip',
            // Promotional Sets
            'pguru', 'pmtg1', 'pleaf', 'pmei', 'parl', 'exp', 'psalvat05', 'psalvat11',
            'mp1', 'mp2', 'med', 'j20', 'zne', 'bot', 'rex',
            // Un-Serious Sets
            'ugl', 'unh', 'ust', 'und', 'unf', 'una',
            // Unnoficial Symbols
            'pfnm', '30a'
          ];

  mtgSetsLeft = ['a']
  mtgSetsRight = ['b']

  // Shuffle Function to create random background from MTG Set Symbols
  // Note: we select as many as we need (61), since keeping all the values, even hidden, generates empty space below the footer. This way we no longer need a ngIf clause in the background section
  shuffle = (array: string[]) =>  { 
    return array.sort(() => Math.random() - 0.5).slice(0,70);
  }
  
  constructor() { }

  ngOnInit(): void {
    var symbols = this.shuffle(this.mtgSets)
    this.mtgSetsLeft = symbols.slice(0,35)
    this.mtgSetsRight = symbols.slice(35,70)
  }
  
}
