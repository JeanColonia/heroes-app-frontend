import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';


const routes:Routes=[

  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren:()=> import('./heroes/heroes-routing.module').then( heroesModule => heroesModule.HeroesRoutingModule),
    canLoad:[AuthGuard]
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
