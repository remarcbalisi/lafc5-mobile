import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentApplyLeavePage } from '../agent-apply-leave/agent-apply-leave';
import { AgentNotificationPage } from '../agent-notification/agent-notification';
import { AgentRequestHistoryPage } from '../agent-request-history/agent-request-history';
/**
 * Generated class for the AgentTabscontrollerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-tabscontroller',
  templateUrl: 'agent-tabscontroller.html',
})
export class AgentTabscontrollerPage {
  tab1Root: any = AgentApplyLeavePage;
  tab2Root: any = AgentNotificationPage;
  tab3Root: any = AgentRequestHistoryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentTabscontrollerPage');
  }

}

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { AgentApplyLeavePage } from '../agent-apply-leave/agent-apply-leave';
// import { AgentNotificationPage } from '../agent-notification/agent-notification';
// import { AgentRequestHistoryPage } from '../agent-request-history/agent-request-history';

// @Component({
//   selector: 'page-tabs-controller',
//   templateUrl: 'tabs-controller.html'
// })
// export class TabsControllerPage {

//   tab1Root: any = AgentApplyLeavePage;
//   tab2Root: any = AgentNotificationPage;
//   tab3Root: any = AgentRequestHistoryPage;
//   constructor(public navCtrl: NavController) {
//   }
  
// }
