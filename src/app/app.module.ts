import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ApplyLeavePage } from '../pages/apply-leave/apply-leave';
import { NotificationPage } from '../pages/notification/notification';
import { LeaveRequestPage } from '../pages/leave-request/leave-request';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NoticationContentPage } from '../pages/notication-content/notication-content';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ApplyLeavePage,
    NotificationPage,
    LeaveRequestPage,
    TabsControllerPage,
    NoticationContentPage,
    LoginPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ApplyLeavePage,
    NotificationPage,
    LeaveRequestPage,
    TabsControllerPage,
    NoticationContentPage,
    LoginPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}