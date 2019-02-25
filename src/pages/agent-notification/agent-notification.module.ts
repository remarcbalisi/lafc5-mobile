import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentNotificationPage } from './agent-notification';

@NgModule({
  declarations: [
    AgentNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentNotificationPage),
  ],
})
export class AgentNotificationPageModule {}
