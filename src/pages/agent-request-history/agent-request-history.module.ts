import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentRequestHistoryPage } from './agent-request-history';

@NgModule({
  declarations: [
    AgentRequestHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentRequestHistoryPage),
  ],
})
export class AgentRequestHistoryPageModule {}
