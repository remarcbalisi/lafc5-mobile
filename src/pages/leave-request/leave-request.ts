import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { NoticationContentPage } from '../notication-content/notication-content';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html'
})
export class LeaveRequestPage {
  
  public leave_requests : any;
  public loader;
  public auth_user : any;

  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    ) {

      this.api.getToken().then(token=>{
        this.api.me(token).subscribe(response=>{
          this.auth_user = response;
        });
      });
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

  approveDisapprove(leave_request, action){
    console.log(leave_request);
    this.presentToast('Approving Request...');
    this.api.getToken().then(token=>{
      this.api.admin_approve_disapprove(token, leave_request.id, leave_request.owner.id ,action, 'n-a').subscribe(response=>{
        console.log(response);
        this.presentToast('Successfully Approved! Hooray!');
      }, err=>{
        this.presentToast('Approved Error!');
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

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
