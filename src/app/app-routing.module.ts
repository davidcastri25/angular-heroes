/* Angular Imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App Imports */
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* Routes */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, //Los dos puntos : indcan que :id es un placeholder para la id de un héroe (por tanto, dinámico)
  { path: 'heroes', component: HeroesComponent }  
];

/* Decorator */
@NgModule({
  imports: [RouterModule.forRoot(routes)], //Configuramos el router en root level (por eso forRoot)
  exports: [RouterModule]
})

/* Class */
export class AppRoutingModule { }
