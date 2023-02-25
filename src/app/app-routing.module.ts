import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HemerotecaComponent } from './hemeroteca/hemeroteca.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'archive', component: HemerotecaComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
