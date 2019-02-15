import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { NotificationPage } from '../notification/notification';
import { LeaveRequestPage } from '../leave-request/leave-request';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ApplyLeavePage;
  tab2Root: any = NotificationPage;
  tab3Root: any = LeaveRequestPage;
  constructor(public navCtrl: NavController) {
  }
  
}
