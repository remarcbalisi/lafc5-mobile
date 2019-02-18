import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToApplyLeave(params){
    if (!params) params = {};
    this.navCtrl.push(ApplyLeavePage);
  }
  goToTabs(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
