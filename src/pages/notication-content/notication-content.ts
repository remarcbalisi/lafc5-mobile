import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notication-content',
  templateUrl: 'notication-content.html'
})
export class NoticationContentPage {

  public leave : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.leave = navParams.get('params');
  }
  
}
