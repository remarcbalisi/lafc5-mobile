import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { ApiProvider } from '../../providers/api/api'
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgentTabscontrollerPage } from '../agent-tabscontroller/agent-tabscontroller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email = '';
  public password = '';
  public loader;
  public alert;

  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
  }
  goToApplyLeave(params){
    if (!params) params = {};
    this.navCtrl.push(ApplyLeavePage);
  }
  goToTabs(params){
    if (!params) params = {};
    this.navCtrl.push(AgentTabscontrollerPage);
  }
  logIn(){
    this.presentLoading('Logging you in..');
    this.api.login(this.email, this.password).subscribe(response=>{
      var resp : any;
      resp = response;
      this.storage.set('access_token', resp.access_token).then(val=>{
        this.api.getToken().then(token=>{
          this.api.me(token).subscribe(response=>{
            let resp : any;
            resp = response;
            var is_admin = 0;
            resp.roles.forEach(role_el => {
              if(role_el.role_id == 1){
                is_admin = 1;
              }
            });
            this.loader.dismiss();
            if( is_admin == 1 ){
              this.navCtrl.push(TabsControllerPage);
            }else{
              this.navCtrl.push(AgentTabscontrollerPage);
            }
          });
        });
      });
    }, err=>{
      this.loader.dismiss();
      this.showAlert('Invalid Credentials', 'Wrong email/password');
    });
  }

  presentLoading(message) {
    this.loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    this.loader.present();
  }

  showAlert(title, subtitle) {
    this.alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    this.alert.present();
  }

}
