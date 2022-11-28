import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[skillTemplate]',
    host: {
    }
})
export class SkillTemplateDirective {
    
    @Input('skillTemplate') name!: 'progress';
    
    constructor(public template: TemplateRef<any>) {}
    
    getType(): string {
        return this.name;
    }
}