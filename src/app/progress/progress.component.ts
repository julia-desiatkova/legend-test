import { Component, Input } from "@angular/core";

export type PersentType = '0' | '1/4' | '2/4' | '3/4' | '4/4'; 

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
    @Input() persent: PersentType = '0';
}
