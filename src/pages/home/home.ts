import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// storage
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  srcImage;

  player1: any = {
     "p_name" : "",
     "p_class" : "",
     "p_lvl" : "",
     "p_health" : "",
     "p_exp" : ""
  };

  constructor(private storage: Storage, public navCtrl: NavController) {
    //alert("hello home constructor");
  }

  ionViewWillEnter() {
    this.storage.ready().then(() =>
    {
        this.storage.get('player').then((val) =>
        {
           this.player1 = val;
           //alert("classe : " + this.player1.p_class);
           if (this.player1.p_class == 'Guerrier') {
             this.srcImage = "../../assets/imgs/chevalier4th.png";
           }
           else if (this.player1.p_class == "Chevalier") {
             this.srcImage = "../../assets/imgs/Chevalier.png"
           }
           //loadImage(this.player1.p_class);
        });

        //this.storage.set('player', this.player1);

    });
  }

  ionViewWillLeave() {
    //alert("class : " + this.player1.p_class);
    this.storage.ready().then(() =>
    {
        this.storage.set('player', this.player1);
    });  }

}
