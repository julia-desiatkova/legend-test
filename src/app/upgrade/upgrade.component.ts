import { Component, Input } from '@angular/core';
import { PersentType } from '../progress/progress.component'

export interface SkillModel {
    name: string;
    bonusName: string;
    bonus: string;
    persent: PersentType;
}

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent {
    @Input() image: string = '';
    @Input() name: string = '';
    @Input() space: string = '';
    @Input() description: string = '';
    @Input() describe: string = '';
    @Input() skill: Array<SkillModel> = [];
}
