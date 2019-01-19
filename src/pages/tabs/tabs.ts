import { Component } from '@angular/core';

import { DemarragePage } from '../demarrage/demarrage';
import { FightPage } from '../fight/fight';
import { HomePage } from '../home/home';
import { DicesPage } from '../dices/dices';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage
{
    tab1Root = DemarragePage;
    tab2Root = HomePage;
    tab3Root = FightPage;
    tab4Root = DicesPage;

    constructor()
    {

    }
}
