import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: 'map',
        loadChildren: () =>
          import('./views/map/map.module').then((m) => m.MapModule),
      },
      { path: 'home', component: HomeViewComponent },

      { path: '**', redirectTo: 'home' },
    ]),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
