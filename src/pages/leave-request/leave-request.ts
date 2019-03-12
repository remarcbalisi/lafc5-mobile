import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NoticationContentPage } from '../notication-content/notication-content';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html'
})
export class LeaveRequestPage {
  
  public leave_requests : any;
  public loader;

  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    public loadingCtrl: LoadingController,
    ) {
  }
  goToNoticationContent(params){
    if (!params) params = {};
    this.navCtrl.push(NoticationContentPage, {params:params});
  }

  ionViewDidEnter(){
    this.getLeaveRequests();
  }

  getLeaveRequests(){
    this.presentLoading('Getting Leave Requests..')
    this.api.getToken().then(token=>{
      this.api.admin_get_leaverequests(token).subscribe(response=>{
        this.leave_requests = response;
        console.log(response);
        this.loader.dismiss();
      })
    });
  }

  presentLoading(message) {
    this.loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    this.loader.present();
  }

}
