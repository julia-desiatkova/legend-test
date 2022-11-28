import { Component } from '@angular/core';
import { SkillModel } from './upgrade/upgrade.component';

interface DataModel {
    image: string;
    name: string;
    space: string;
    description: string;
    describe: string;
    skill: Array<SkillModel>;
}

const Data: DataModel[] = [
    {
        image: "unstoppable",
        name: "Unstoppable",
        space: "Survivability", 
        description: "Legendary skill",
        describe: "Reduce engine repair time. At last mastery level gain reduced mobility with disabled engine.",
        skill: [
            {
                name: "Mastery 1/4",
                bonusName: "Engine repair time",
                bonus: "-2.5%",
                persent: "1/4"
            },
            {
                name: "Upgrade on legendary rank 2",
                bonusName: "Engine repair time",
                bonus: "-2.5%",
                persent: "2/4"
            }
        ]
    },
    {
        image: "overgrown",
        name: "Overgrown",
        space: "Diver", 
        description: "Legendary skill",
        describe: "Аttack power is increased and speed is reduced. ",
        skill: [
            {
                name: "Mastery 2/4",
                bonusName: "Attack power increasing",
                bonus: "15%",
                persent: "2/4"
            },
            {
                name: "Upgrade on legendary rank 3",
                bonusName: "Attack power increasing",
                bonus: "20%",
                persent: "3/4"
            }
        ]
    },
    {
        image: "lovable",
        name: "Lovable",
        space: "Commander", 
        description: "Legendary skill",
        describe: "Aliens love you and miss when they shoot at you, and the enemies of the human race just drop their weapons.",
        skill: [
            {
                name: "Mastery 3/4",
                bonusName: "Chance of missing",
                bonus: "0.75%",
                persent: "3/4"
            },
            {
                name: "Upgrade on legendary rank 4",
                bonusName: "Chance of missing",
                bonus: "1%",
                persent: "1/4"
            }
        ]
    }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
    data = Data;
    n = 0;
}
