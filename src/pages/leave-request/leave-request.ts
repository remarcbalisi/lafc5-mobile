import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticationContentPage } from '../notication-content/notication-content';

@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html'
})
export class LeaveRequestPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticationContent(params){
    if (!params) params = {};
    this.navCtrl.push(NoticationContentPage);
  }
}
