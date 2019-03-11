import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentTabscontrollerPage } from './agent-tabscontroller';

@NgModule({
  declarations: [
    AgentTabscontrollerPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentTabscontrollerPage),
  ],
})
export class AgentTabscontrollerPageModule {}

