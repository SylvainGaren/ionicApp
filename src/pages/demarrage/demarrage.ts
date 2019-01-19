import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// storage
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-demarrage',
  templateUrl: 'demarrage.html'
})
export class DemarragePage
{
    // player json
    player: any = {
       "p_name" : "",
       "p_class" : "",
       "p_lvl" : "",
       "p_health" : "",
       "p_exp" : ""
    };

    // attributs locaux
    name: string;
    classe: string;
    level: string;
    health: string;
    exp: string;

    // constructeur avec algos pré chargés
    constructor(private storage: Storage, public navCtrl: NavController)
    {


        /*this.player = {
           "p_name" : "Thomas",
           "p_class" : "Guerrier",
           "p_lvl" : "2",
           "p_health" : "20",
           "p_exp" : "999"
        };*/

        /*this.storage.ready().then(() =>
        {
            this.storage.get('player').then((val) =>
            {
               this.player = val;
            });
            this.storage.set('player', this.player);
            alert(this.player.p_name);
        });*/
    }

    savePlayer()
    {
        alert(this.name + ' ' + this.classe + ' ' + this.level + ' ' + this.health + ' ' + this.exp);
        this.player.p_name = this.name;
        this.player.p_class = this.classe;
        this.player.p_lvl = this.level;
        this.player.p_health = this.health;
        this.player.p_exp = this.exp;
        this.storage.set('player', this.player);
    }
}
