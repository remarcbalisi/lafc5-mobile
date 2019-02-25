import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentApplyLeavePage } from './agent-apply-leave';

@NgModule({
  declarations: [
    AgentApplyLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(AgentApplyLeavePage),
  ],
})
export class AgentApplyLeavePageModule {}
