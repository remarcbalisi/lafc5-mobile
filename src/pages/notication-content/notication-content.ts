import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-notication-content',
  templateUrl: 'notication-content.html'
})
export class NoticationContentPage {

  public leave : any;
  public auth_user : any;

  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    public navParams: NavParams
    ) {
      this.leave = navParams.get('params');
      this.api.getToken().then(token=>{
        this.api.me(token).subscribe(response=>{
          this.auth_user = response;
        });
      });
      console.log(this.auth_user);
      console.log(this.leave);
  }
  
}
