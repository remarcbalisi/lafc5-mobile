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
import { AgentApplyLeavePage } from '../pages/agent-apply-leave/agent-apply-leave';
import { AgentNotificationPage } from '../pages/agent-notification/agent-notification';
import { AgentRequestHistoryPage } from '../pages/agent-request-history/agent-request-history';
import { AgentTabscontrollerPage } from '../pages/agent-tabscontroller/agent-tabscontroller';
import { NotificationDetailsPage } from '../pages/notification-details/notification-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ApplyLeavePage,
    NotificationPage,
    LeaveRequestPage,
    TabsControllerPage,
    NoticationContentPage,
    LoginPage,
    AgentApplyLeavePage,
    AgentNotificationPage,
    AgentRequestHistoryPage,
    AgentTabscontrollerPage,
    NotificationDetailsPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
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
    AgentApplyLeavePage,
    AgentNotificationPage,
    AgentRequestHistoryPage,
    AgentTabscontrollerPage,
    NotificationDetailsPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}


