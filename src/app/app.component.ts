import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgentTabscontrollerPage } from '../pages/agent-tabscontroller/agent-tabscontroller';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ApiProvider } from '../providers/api/api';



// import { ApplyLeavePage } from '../pages/apply-leave/apply-leave';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    // rootPage:any = TabsControllerPage;
    rootPage: any;

  public loader;
  public auth_user;
  public my_role;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private api: ApiProvider, public loadingCtrl: LoadingController,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.presentLoading('Trying to get info...');
      this.api.getToken().then(token=>{
        this.api.me(token).subscribe(response=>{
          let resp : any;
          resp = response;
          this.auth_user = resp;

          if( response ){
            var is_admin = 0;
            resp.roles.forEach(role_el => {
              if(role_el.role_id == 1){
                is_admin = 1;
              }
            });
            if( is_admin == 1 ){
              this.rootPage = TabsControllerPage;
            }else{
              this.rootPage = AgentTabscontrollerPage;
            }

            this.api.my_roles(token).subscribe(response=>{
              this.my_role = response;
            });

          }
        },err=>{
          console.log('error')
          this.rootPage = LoginPage;
        });
      });
    });
  }

  presentLoading(message) {
    this.loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    this.loader.present();
  }

  logout(){
    this.api.getToken().then(token=>{
      this.api.logout(token).subscribe(response=>{
        this.auth_user = null;
        this.navCtrl.push(MyApp);
      });
    });    
  }
  
}
