import { Component, ContentChildren, Input, QueryList, TemplateRef } from "@angular/core";
import { SkillTemplateDirective } from './skill.directive';

@Component({
    selector: "app-skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.scss"]
})

export class SkillComponent {
    @Input() name: string = 'Name';
    @Input() bonusName: string = 'Bonus Name';
    @Input() bonus: string = '100%';
    @Input() type: string = 'current';

    @ContentChildren(SkillTemplateDirective) templates!: QueryList<any>;

    progressTemplate!: TemplateRef<any>;  
    
    ngAfterViewInit() {
        this.templates.forEach((item) => {
            switch(item.getType()) {
                case 'progress':
                    this.progressTemplate = item.template;
                break;
            }
        });
    }
}
