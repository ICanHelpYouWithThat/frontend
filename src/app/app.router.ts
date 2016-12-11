import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'event', loadChildren: 'app/event/event.module#EventModule', canActivate: [AuthGuard]},
  {path: 'invite', loadChildren: 'app/invite/invite.module#InviteModule'},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ]
})

export class AppRoutingModule {}
