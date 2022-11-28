import { Component, ContentChildren, QueryList, TemplateRef } from "@angular/core";
import { DescribeTemplateDirective } from './describe.directive';

@Component({
    selector: "app-describe",
    templateUrl: "./describe.component.html",
    styleUrls: ["./describe.component.scss"]
})

export class DescribeComponent {

    @ContentChildren(DescribeTemplateDirective) templates!: QueryList<any>;

    textTemplate!: TemplateRef<any>;  
    
    ngAfterViewInit() {
        this.templates.forEach((item) => {
            switch(item.getType()) {
                case 'text':
                    this.textTemplate = item.template;
                break;
            }
        });
    }
}
