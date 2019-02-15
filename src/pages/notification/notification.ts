import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticationContentPage } from '../notication-content/notication-content';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticationContent(params){
    if (!params) params = {};
    this.navCtrl.push(NoticationContentPage);
  }
}
