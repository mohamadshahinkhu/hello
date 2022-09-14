import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxhomeComponent } from './inboxhome/inboxhome.component';

const routes: Routes = [
  {path:'' , component:InboxhomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
