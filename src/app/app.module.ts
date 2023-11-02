// Import Angular Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular Material modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule, MatCommonModule } from '@angular/material/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

// Import my modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HemerotecaComponent } from './hemeroteca/hemeroteca.component';
import { Torneo1Component } from './hemeroteca/2023/torneo1/torneo1.component';
import { Torneo2Component } from './hemeroteca/2023/torneo2/torneo2.component';
import { Torneo3Component } from './hemeroteca/2023/torneo3/torneo3.component';
import { Torneo4Component } from './hemeroteca/2023/torneo4/torneo4.component';
import { Torneo5Component } from './hemeroteca/2023/torneo5/torneo5.component';
import { CalendarComponent } from './calendar/calendar.component';


// Import Flex Layout module
//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    AppFooterComponent,
    AboutComponent,
    HemerotecaComponent,
    HomeComponent,
    CalendarComponent,
    Torneo1Component,
    Torneo2Component,
    Torneo3Component,
    Torneo4Component,
    Torneo5Component,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatCommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
