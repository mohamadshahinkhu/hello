
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxhomeComponent } from './inboxhome/inboxhome.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ModalComponent } from '../shared/modal/modal.component';


@NgModule({
  declarations: [
    InboxhomeComponent,
    EmailIndexComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports :[
    EmailFormComponent
  ]
})
export class InboxModule {}
