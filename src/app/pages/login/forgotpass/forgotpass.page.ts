import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit 
{

  constructor(public modalController: ModalController) { }

  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: ForgotpassPage
      });
    return await modal.present();
  }



  ngOnInit() {
  }

}
