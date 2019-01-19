import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// storage
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html'
})
export class FightPage {

  player1: any = {
     "p_name" : "",
     "p_class" : "",
     "p_lvl" : "",
     "p_health" : "",
     "p_exp" : ""
  };

  player2: any = {
     "p_name" : "",
     "p_class" : "",
     "p_lvl" : "",
     "p_health" : "",
     "p_exp" : ""
  };
  public valName:string;
  public valClasse:string;
  public valLvlArme:string;
  public valVie:string;
  public valXp:string;

  constructor(private storage: Storage, public navCtrl: NavController) {
    //alert("Hello constructor fight");
  }

  ionViewWillEnter() {
    this.storage.ready().then(() =>
    {
        this.storage.get('player').then((val) =>
        {
           this.player1 = val;
           //alert("classe : " + this.player1.p_class);
           //loadImage(this.player1.p_class);
        });

        //this.storage.set('player', this.player1);

    });
  }

  savePlayer()
  {
      alert(this.valName + ' ' + this.valClasse + ' ' + this.valLvlArme + ' ' + this.valVie + ' ' + this.valXp);
      this.player2.p_name = this.valName;
      this.player2.p_class = this.valClasse;
      this.player2.p_lvl = this.valLvlArme;
      this.player2.p_health = this.valVie;
      this.player2.p_exp = this.valXp;
      this.storage.set('player2', this.player2);
  }

  ionViewWillLeave() {
    this.storage.ready().then(() =>
    {
        this.storage.set('player', this.player1);
        this.storage.set('player2', this.player2);
    });
  }

}
