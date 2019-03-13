import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {

  public start_date;
  public end_date;
  public leave_address;
  public contact;
  public leave_type;
  public leave_types;
  public note;
  public alert;
  public loader;


  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    ) {
      this.get_leave_type();
  }

  apply(){
    this.presentLoading('Applying leave...');
    var params = {
      start_date: this.start_date,
      end_date: this.end_date,
      leave_address: this.leave_address,
      contact: this.contact,
      leave_type: this.leave_type,
      note:this.note,
    }
    this.api.getToken().then(token=>{
      this.api.apply_leave(token, params).subscribe(response=>{
        let resp : any;
        resp = response;
        this.loader.dismiss();
        if(resp.status == 'success'){
          this.showAlert('Success',resp.message);
        }
        else{
          this.showAlert('Failed',resp.message);
        }
        console.log(response);
      });
    });
  }

  get_leave_type(){
    this.api.getToken().then(token=>{
      this.api.leave_types(token).subscribe(response=>{
        this.leave_types = response;
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

  showAlert(title, subtitle) {
    this.alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    this.alert.present();
  }
  
}
