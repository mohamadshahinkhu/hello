import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxhomeComponent } from './inboxhome/inboxhome.component';
import { EmailcreateComponent } from './emailcreate/emailcreate.component';
import { EmailindexComponent } from './emailindex/emailindex.component';
import { EmailreplyComponent } from './emailreply/emailreply.component';
import { EmailshowComponent } from './emailshow/emailshow.component';


@NgModule({
  declarations: [
    InboxhomeComponent,
    EmailcreateComponent,
    EmailindexComponent,
    EmailreplyComponent,
    EmailshowComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
