import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// storage
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-dices',
  templateUrl: 'dices.html'
})

export class DicesPage {

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

  player1Dices;
  player2Dices;
  healthPlayer1;
  healthPlayer2;

  //randomNumber;
  jetPlayer1;
  jetPlayer2;
  srcImagePlayer1;
  srcImagePlayer2;

  constructor(private storage: Storage, public navCtrl: NavController)
  {

  }

  ionViewWillEnter() {
    this.storage.ready().then(() =>
    {
        this.storage.get('player').then((val) =>
        {
           this.player1 = val;
           //alert("classe : " + this.player1.p_class);
           this.player1Dices = this.player1.p_lvl;
           this.healthPlayer1 = this.player1.p_health;
           if (this.player1.p_class == 'Guerrier') {
             this.srcImagePlayer1 = "../../assets/imgs/chevalier4th_little.png";
           }
           else if (this.player1.p_class == "Chevalier") {
             this.srcImagePlayer1 = "../../assets/imgs/Chevalier_little.png"
           }
           //loadImage(this.player1.p_class);
        });
        this.storage.get('player2').then((valP2) =>
        {
           this.player2 = valP2;
           //alert("classe : " + this.player1.p_class);
           this.player2Dices = this.player2.p_lvl;
           this.healthPlayer2 = this.player2.p_health;
           if (this.player2.p_class == 'Guerrier') {
             this.srcImagePlayer2 = "../../assets/imgs/chevalier4th_little.png";
           }
           else if (this.player2.p_class == "Chevalier") {
             this.srcImagePlayer2 = "../../assets/imgs/Chevalier_little.png"
           }
           //loadImage(this.player1.p_class);
        });

        //this.storage.set('player', this.player1);

    });
  }

  genRandomPlayer1() {
    // pour entre des valeurs
    var maxV = this.player1.p_lvl * 6;
    var minV = this.player1.p_lvl;
    this.jetPlayer1 = Math.floor(Math.random() * (maxV - minV));
    //this.randomNumber = Math.floor(Math.random()*20) + 1;
  }

  genRandomPlayer2() {
    // pour entre des valeurs
    var MaxV = this.player2.p_lvl * 6;
    var MinV = this.player2.p_lvl;
    this.jetPlayer2 = Math.floor(Math.random() * (MaxV - MinV));
    //this.randomNumber = Math.floor(Math.random()*20) + 1;
  }

  result() {
    if (this.player1.p_health == 0) {
      alert("Le joueur 2 a remporté le combat !");
    }
    else if (this.player2.p_health == 0) {
      alert("Le joueur 1 a remporté le combat !");
    }
    else if (this.jetPlayer1 == this.jetPlayer2) {
      alert("Relancez les dés, égalité");
    }
    else if (this.jetPlayer1 > this.jetPlayer2) {
      alert("Le joueur 1 a gagné !");
      this.player2.p_health -= 1;
      this.healthPlayer2 -= 1;
    }
    else if (this.jetPlayer2 > this.jetPlayer1) {
      alert("Le joueur 2 a gagné !");
      this.player1.p_health -= 1;
      this.healthPlayer1 -= 1;
    }
  }

  upLifePlayer1() {
    this.player1.p_health += 1;
    this.healthPlayer1 += 1;
  }
  
  upLifePlayer2(){
    this.player2.p_health += 1;
    this.healthPlayer2 += 1;
  }

  ionViewWillLeave() {
    this.storage.ready().then(() =>
    {
        this.storage.set('player', this.player1);
        this.storage.set('player2', this.player2);
    });
  }

}
