import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxhomeComponent } from './inboxhome/inboxhome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';

const routes: Routes = [{ path: '', component: InboxhomeComponent ,
children :[
  {path:'', component:PlaceholderComponent},
  {path:':id' , component:EmailShowComponent}]

}]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
