webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demarrage_demarrage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fight_fight__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dices_dices__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__demarrage_demarrage__["a" /* DemarragePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__fight_fight__["a" /* FightPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__dices_dices__["a" /* DicesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Demarrage" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Personnage" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Combat" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Dices" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemarragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// storage

var DemarragePage = /** @class */ (function () {
    // constructeur avec algos pré chargés
    function DemarragePage(storage, navCtrl) {
        /*this.player = {
           "p_name" : "Thomas",
           "p_class" : "Guerrier",
           "p_lvl" : "2",
           "p_health" : "20",
           "p_exp" : "999"
        };*/
        this.storage = storage;
        this.navCtrl = navCtrl;
        // player json
        this.player = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
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
    DemarragePage.prototype.savePlayer = function () {
        alert(this.name + ' ' + this.classe + ' ' + this.level + ' ' + this.health + ' ' + this.exp);
        this.player.p_name = this.name;
        this.player.p_class = this.classe;
        this.player.p_lvl = this.level;
        this.player.p_health = this.health;
        this.player.p_exp = this.exp;
        this.storage.set('player', this.player);
    };
    DemarragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demarrage',template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\pages\demarrage\demarrage.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Personnage</ion-title>\n\n    <!--<ion-title>\n\n      <ion-searchbar (ionInput)="saveName($event)" placeholder="nom"></ion-searchbar>\n\n    </ion-title>\n\n    <ion-title>\n\n      <ion-searchbar (ionInput)="saveClass($event)" placeholder="nom"></ion-searchbar>\n\n    </ion-title>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- todo : page de démarragemain avec entrée du perso (1 seule fois)\n\n  fond en Combat\n\n    bouton combat : lancement de dès avec dégat magicien, guerrier ou archer etc.\n\n    coeurs pour la vie;\n\n    barre d\'xp : nb exp fixe\n\n    niveau 1 to niveau 10\n\n    100 par combat, 1000 pour monter d\'un niveau\n\n    arbre de compétences en fonction de la classe :\n\n      attaque lvl1 dégâts only,\n\n      attaque lvl2 spécifique en fonction de la classe () : soin 1 personne, soin x personnes\n\n      1 vs 1 ?\n\n      1 vs n ?\n\n      celui qui soigne\n\n  interface pour entrer les personnages ennemis\n\n\n\n  page : compétences avec gestion xp\n\n  page : combat avec images par perso\n\n  page : entrer personnage rival\n\n\n\n\n\n  total pages :\n\n    personnage (modifier les infos, aussi la page renvoyée au début pour créer le perso)\n\n    ajouter adversaire (même type de form)\n\n    arbre des compétences (quand on monte de niveau)\n\n    combattre (choix d\'un adversaire renseigné vs ich)\n\n\n\n-->\n\n\n\n<ion-content padding>\n\n  <!--<p> {{ player | json }} </p>-->\n\n  <ion-item>\n\n    <ion-label stacked>Nom</ion-label>\n\n    <ion-input [(ngModel)]="name" type="text" value="{{ player.p_name }}" (ionInput)="saveItem($event)"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Classe</ion-label>\n\n    <ion-input [(ngModel)]="classe" type="text" value="{{ player.p_class }}"></ion-input>\n\n  </ion-item>\n\n  <!--<ion-item>\n\n    <ion-label>CLasse : </ion-label>\n\n    <ion-select [(ngModel)]="classe" okText="Okay" cancelText="Dismiss" (ionChange)="saveItem($event)">\n\n      <ion-option value="classe">Guerrier</ion-option>\n\n      <ion-option value="classe">Chevalier</ion-option>\n\n    </ion-select>\n\n  </ion-item>-->\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Niveau de l\'arme</ion-label>\n\n    <ion-input [(ngModel)]="level" type="text" value="{{ player.p_lvl }}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Vie</ion-label>\n\n    <ion-input [(ngModel)]="health" type="text" value="{{ player.p_health }}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Expérience</ion-label>\n\n    <ion-input [(ngModel)]="exp" type="text" value="{{ player.p_exp }}"></ion-input>\n\n  </ion-item>\n\n  <ion-buttons center>\n\n    <button color="save" ion-button icon-only (click)="savePlayer()">\n\n      <ion-icon name="planet"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\pages\demarrage\demarrage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DemarragePage);
    return DemarragePage;
}());

//# sourceMappingURL=demarrage.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// storage

var FightPage = /** @class */ (function () {
    function FightPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.player1 = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
        this.player2 = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
        //alert("Hello constructor fight");
    }
    FightPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('player').then(function (val) {
                _this.player1 = val;
                //alert("classe : " + this.player1.p_class);
                //loadImage(this.player1.p_class);
            });
            //this.storage.set('player', this.player1);
        });
    };
    FightPage.prototype.savePlayer = function () {
        alert(this.valName + ' ' + this.valClasse + ' ' + this.valLvlArme + ' ' + this.valVie + ' ' + this.valXp);
        this.player2.p_name = this.valName;
        this.player2.p_class = this.valClasse;
        this.player2.p_lvl = this.valLvlArme;
        this.player2.p_health = this.valVie;
        this.player2.p_exp = this.valXp;
        this.storage.set('player2', this.player2);
    };
    FightPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.set('player', _this.player1);
            _this.storage.set('player2', _this.player2);
        });
    };
    FightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fight',template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\pages\fight\fight.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Combat\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- deux cases avec player 1 et player 2 -->\n\n  <!-- à mettre dans un component pour la genericite -->\n\n  <!--<p> {{ player1 | json }} </p>\n\n  <p> {{ player2 | json }} </p>-->\n\n\n\n  <ion-card>\n\n    <ion-card-content  text-left>\n\n      <p>\n\n        <ion-icon name="contact" color="secondary" item-start></ion-icon>\n\n        {{ player1.p_name }}\n\n      </p>\n\n      <hr>\n\n      <p>{{ player1.p_class }} et niveau arme :  {{ player1.p_lvl }} </p>\n\n      <p>\n\n        {{ player1.p_health }}\n\n        <ion-icon name="heart" color="secondary" item-start></ion-icon>\n\n      </p>\n\n      <p>{{ player1.p_exp }} XP</p>\n\n      <!-- other data -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content  text-left>\n\n      <p>\n\n        <ion-icon name="contact" color="secondary" item-start></ion-icon>\n\n        {{ valName }}\n\n      </p>\n\n      <hr>\n\n      <!-- other data -->\n\n      <p>{{ valClasse }} avec arme de niveau {{ valLvlArme }} </p>\n\n      <p>\n\n        {{ valVie }}\n\n        <ion-icon name="heart" color="secondary" item-start></ion-icon>\n\n      </p>\n\n      <p>{{ valXp }} XP</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Entrez le nom de votre adversaire :</ion-label>\n\n    <ion-input [(ngModel)]="valName"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Entrez la classe de votre adversaire :</ion-label>\n\n    <ion-input [(ngModel)]="valClasse"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Entrez le niveau de son arme :</ion-label>\n\n    <ion-input [(ngModel)]="valLvlArme"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Entrez la vie de votre adversaire :</ion-label>\n\n    <ion-input [(ngModel)]="valVie"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Entrez son xp :</ion-label>\n\n    <ion-input [(ngModel)]="valXp"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button round (click)="savePlayer()"> Sauver</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\pages\fight\fight.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FightPage);
    return FightPage;
}());

//# sourceMappingURL=fight.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// storage

var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.player1 = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
        //alert("hello home constructor");
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('player').then(function (val) {
                _this.player1 = val;
                //alert("classe : " + this.player1.p_class);
                if (_this.player1.p_class == 'Guerrier') {
                    _this.srcImage = "../../assets/imgs/chevalier4th.png";
                }
                else if (_this.player1.p_class == "Chevalier") {
                    _this.srcImage = "../../assets/imgs/Chevalier.png";
                }
                //loadImage(this.player1.p_class);
            });
            //this.storage.set('player', this.player1);
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        //alert("class : " + this.player1.p_class);
        this.storage.ready().then(function () {
            _this.storage.set('player', _this.player1);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Personnage</ion-title>\n\n    <!--<ion-title>\n\n      <ion-searchbar (ionInput)="saveName($event)" placeholder="nom"></ion-searchbar>\n\n    </ion-title>\n\n    <ion-title>\n\n      <ion-searchbar (ionInput)="saveClass($event)" placeholder="nom"></ion-searchbar>\n\n    </ion-title>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class=\'homePage\'>\n\n  <ion-card>\n\n    <ion-card-content  text-left>\n\n      <p>\n\n        <ion-icon name="contact" color="secondary" item-start></ion-icon>\n\n        {{ player1.p_name }}\n\n      </p>\n\n      <hr>\n\n      <p>{{ player1.p_class }} de niveau {{ player1.p_lvl }} </p>\n\n      <p>\n\n        {{ player1.p_health }}\n\n        <ion-icon name="heart" color="secondary" item-start></ion-icon>\n\n      </p>\n\n      <p>{{ player1.p_exp }} XP</p>\n\n      <!-- other data -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--<ion-img style="opacity:0.8;filter:alpha(opacity=60)" width="80" height="80" src="{{srcImage}}"></ion-img>-->\n\n  <img src="{{srcImage}}">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// storage

var DicesPage = /** @class */ (function () {
    function DicesPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.player1 = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
        this.player2 = {
            "p_name": "",
            "p_class": "",
            "p_lvl": "",
            "p_health": "",
            "p_exp": ""
        };
    }
    DicesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('player').then(function (val) {
                _this.player1 = val;
                //alert("classe : " + this.player1.p_class);
                _this.player1Dices = _this.player1.p_lvl;
                _this.healthPlayer1 = _this.player1.p_health;
                if (_this.player1.p_class == 'Guerrier') {
                    _this.srcImagePlayer1 = "../../assets/imgs/chevalier4th_little.png";
                }
                else if (_this.player1.p_class == "Chevalier") {
                    _this.srcImagePlayer1 = "../../assets/imgs/Chevalier_little.png";
                }
                //loadImage(this.player1.p_class);
            });
            _this.storage.get('player2').then(function (valP2) {
                _this.player2 = valP2;
                //alert("classe : " + this.player1.p_class);
                _this.player2Dices = _this.player2.p_lvl;
                _this.healthPlayer2 = _this.player2.p_health;
                if (_this.player2.p_class == 'Guerrier') {
                    _this.srcImagePlayer2 = "../../assets/imgs/chevalier4th_little.png";
                }
                else if (_this.player2.p_class == "Chevalier") {
                    _this.srcImagePlayer2 = "../../assets/imgs/Chevalier_little.png";
                }
                //loadImage(this.player1.p_class);
            });
            //this.storage.set('player', this.player1);
        });
    };
    DicesPage.prototype.genRandomPlayer1 = function () {
        // pour entre des valeurs
        var maxV = this.player1.p_lvl * 6;
        var minV = this.player1.p_lvl;
        this.jetPlayer1 = Math.floor(Math.random() * (maxV - minV));
        //this.randomNumber = Math.floor(Math.random()*20) + 1;
    };
    DicesPage.prototype.genRandomPlayer2 = function () {
        // pour entre des valeurs
        var MaxV = this.player2.p_lvl * 6;
        var MinV = this.player2.p_lvl;
        this.jetPlayer2 = Math.floor(Math.random() * (MaxV - MinV));
        //this.randomNumber = Math.floor(Math.random()*20) + 1;
    };
    DicesPage.prototype.result = function () {
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
    };
    DicesPage.prototype.upLifePlayer1 = function () {
        this.player1.p_health += 1;
        this.healthPlayer1 += 1;
    };
    DicesPage.prototype.upLifePlayer2 = function () {
        this.player2.p_health += 1;
        this.healthPlayer2 += 1;
    };
    DicesPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.set('player', _this.player1);
            _this.storage.set('player2', _this.player2);
        });
    };
    DicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dices',template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\pages\dices\dices.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Launch Dices to fight\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="dicesPage">\n\n  <ion-label>\n\n    Nombre de dés de Player1 : {{player1Dices}}\n\n  </ion-label>\n\n  <ion-label>\n\n    Nombre de dés de Player2 : {{player2Dices}}\n\n  </ion-label>\n\n  <ion-label>\n\n    random : {{jetPlayer1}}\n\n  </ion-label>\n\n  <button ion-button (click)="genRandomPlayer1()">\n\n    Launch Dices\n\n  </button>\n\n  <ion-label>\n\n    random : {{jetPlayer2}}\n\n  </ion-label>\n\n  <button ion-button (click)="genRandomPlayer2()">\n\n    Launch Dices\n\n  </button>\n\n  <button ion-button (click)="result()">\n\n    Ok\n\n  </button>\n\n  <p class="healthPlayer1">\n\n    Vie joueur 1 : {{healthPlayer1}}\n\n    <ion-icon name="heart" color="secondary" item-start></ion-icon>\n\n  </p>\n\n\n\n  <p class="healthPlayer2">\n\n    Vie joueur 2 : {{healthPlayer2}}\n\n    <ion-icon name="heart" color="secondary" item-start></ion-icon>\n\n  </p>\n\n  <img class="posPlayer1" src="{{srcImagePlayer1}}">\n\n  <img class="posPlayer2" src="{{srcImagePlayer2}}">\n\n\n\n  <button class="posBtnLifePlayer1" ion-button small (click)="upLifePlayer1()">+</button>\n\n  <button class="posBtnLifePlayer2" ion-button small (click)="upLifePlayer2()">+</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\pages\dices\dices.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DicesPage);
    return DicesPage;
}());

//# sourceMappingURL=dices.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_demarrage_demarrage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_fight_fight__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dices_dices__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// pages








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_demarrage_demarrage__["a" /* DemarragePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_fight_fight__["a" /* FightPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dices_dices__["a" /* DicesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_demarrage_demarrage__["a" /* DemarragePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_fight_fight__["a" /* FightPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dices_dices__["a" /* DicesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\documents\MMO\mmo\mmo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\documents\MMO\mmo\mmo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map