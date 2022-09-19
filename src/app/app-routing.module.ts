import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesGuard } from './_guards/acces.guard';

const routes: Routes = [
  {
    path: 'inbox',
    canActivate: [AccesGuard],
    loadChildren: () =>
      import('./inbox/inbox.module').then((m) => m.InboxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
